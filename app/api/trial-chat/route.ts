import { NextRequest, NextResponse } from 'next/server';
import { groqChatAndExtract } from '@/lib/acquisition/groq';
import { isFlowComplete, mergeAuthorData } from '@/lib/acquisition/utils';
import { z } from 'zod';
import { ChatMessage, AuthorDataFields } from '@/types/acquisition';

const trialChatRequestSchema = z.object({
  sessionId: z.string().min(1, 'Session ID is required'),
  message: z.string().min(1, 'Message is required'),
  chatHistory: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string(),
    })
  ).optional().default([]),
  currentData: z.any().optional().default({}),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validation = trialChatRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { message, chatHistory, currentData } = validation.data;

    // Call Groq API to get response and extract structured data
    const { reply, extractedData } = await groqChatAndExtract(
      chatHistory as ChatMessage[],
      message,
      currentData as AuthorDataFields
    );

    // Merge extracted data with current data
    const updatedData = mergeAuthorData(currentData as AuthorDataFields, extractedData);

    // Check if flow is complete
    const complete = isFlowComplete(updatedData);

    return NextResponse.json({
      success: true,
      reply,
      updatedData,
      isComplete: complete,
    });
  } catch (error: unknown) {
    console.error('Error in trial chat endpoint:', error);

    // Extract user-friendly error message
    const errorObj = error as { message?: string };
    const errorMessage = errorObj.message && errorObj.message.includes('temporarily unavailable')
      ? errorObj.message
      : 'Failed to process chat message. Please try again.';

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
