import { NextRequest, NextResponse } from 'next/server';
import { generateAuthorPersona } from '@/lib/acquisition/groq';
import { ChatMessage } from '@/types/acquisition';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { chatHistory } = body;

    if (!chatHistory || !Array.isArray(chatHistory)) {
      return NextResponse.json(
        { success: false, error: 'Invalid chat history provided' },
        { status: 400 }
      );
    }

    if (chatHistory.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Not enough conversation data to generate persona' },
        { status: 400 }
      );
    }

    // Generate the persona using Groq
    const persona = await generateAuthorPersona(chatHistory as ChatMessage[]);

    return NextResponse.json({
      success: true,
      persona,
    });
  } catch (error) {
    console.error('Error in persona generation API:', error);

    const errorMessage = error instanceof Error ? error.message : 'Failed to generate persona';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
