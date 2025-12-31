import { NextRequest, NextResponse } from 'next/server';
import { getAuthorData, updateAuthorData, saveChatMessage } from '@/lib/db/queries';
import { groqChatAndExtract } from '@/lib/acquisition/groq';
import { getNextUnanswered, isFlowComplete, mergeAuthorData } from '@/lib/acquisition/utils';
import { z } from 'zod';
import { ChatMessage } from '@/types/acquisition';

const chatRequestSchema = z.object({
  sessionId: z.string().uuid('Valid session ID is required'),
  message: z.string().min(1, 'Message is required'),
  chatHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string(),
    })
  ),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = chatRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { sessionId, message, chatHistory } = validation.data;

    // Save user message to database
    await saveChatMessage(sessionId, 'user', message);

    // Get current author data
    const currentData = await getAuthorData(sessionId);

    // Call Groq API to get response and extract structured data
    const { reply, extractedData } = await groqChatAndExtract(
      chatHistory as ChatMessage[],
      message,
      currentData
    );

    // Merge extracted data with current data
    const updatedData = mergeAuthorData(currentData, extractedData);

    // Save updated data to database
    await updateAuthorData(sessionId, updatedData);

    // The AI's reply already includes the next question if needed,
    // so we don't need to append it again
    // Save assistant reply to database
    await saveChatMessage(sessionId, 'assistant', reply);

    // Check if flow is complete
    const complete = isFlowComplete(updatedData);

    // For debugging/logging purposes only
    const nextField = getNextUnanswered(updatedData);

    return NextResponse.json({
      success: true,
      reply,
      updatedData,
      nextQuestion: nextField?.prompt, // For debugging only
      isComplete: complete,
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process chat message',
      },
      { status: 500 }
    );
  }
}
