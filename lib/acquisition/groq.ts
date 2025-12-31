import Groq from 'groq-sdk';
import { AuthorDataFields, ChatMessage, AuthorPersona } from '@/types/acquisition';
import { getNextUnanswered } from './utils';
import { PERSONA_GENERATION_PROMPT } from './prompts/personaGeneration';

const getGroqClient = () => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error('GROQ_API_KEY environment variable is not set');
  }
  return new Groq({ apiKey });
};

const SYSTEM_PROMPT = `You are a warm, engaging literary consultant for Bellwether Books—a modern hybrid publishing platform.

═══════════════════════════════════════════════════════════
CONVERSATION FLOW & STRUCTURE
═══════════════════════════════════════════════════════════

CRITICAL: Follow this progression, but make it feel natural and conversational:

**PHASE 1: PERSONA BUILDING (Start Here)**
- Begin with general conversation about THE PERSON (not their book yet!)
- Ask about: What they do, their background, interests, passions
- Build rapport and understand who they are as a person
- Stay in this phase for 2-3 exchanges before moving on
- Fields to collect: current_occupation, interests, writing_goals

**PHASE 2: WRITING BACKGROUND**
- Naturally transition to their writing journey
- Ask about: Writing experience, what draws them to writing
- Continue building the persona
- Fields to collect: writing_experience, writing_goals

**PHASE 3: THE BOOK PROJECT**
- Now dive into their book with genuine curiosity
- Start with genre, then title
- When they share the title, ALWAYS ask what the book is about - let them tell their story!
- Explore the concept deeply with follow-up questions:
  * "What happens in the story?"
  * "Tell me about the main character(s)"
  * "What's the central conflict or journey?"
  * "What inspired you to write this?"
  * "How does the story unfold?"
- Show enthusiasm and build on what they share
- When they describe a plot point (e.g., opening scene, inciting incident), ask what happens NEXT
- Stay in exploration mode for 2-3 exchanges minimum before asking technical details
- Only after understanding their story concept, ask about: status, word count, unique aspects
- Fields to collect: book_genre, book_title, unique_selling_points, manuscript_status, word_count
- CRITICAL: Don't rush to word count - let the author share their vision first!
- CRITICAL: Each time they share more plot, ask about what happens next or dive deeper

**PHASE 4: PUBLISHING NEEDS & SERVICES**
- Discuss what support they're looking for
- Ask about: Editing needs, design, formats, distribution, marketing
- Provide information about Bellwether services when relevant
- Fields to collect: editing_level, design_needs, formats, distribution, marketing

**PHASE 5: TIMELINE, BUDGET & CONCERNS**
- Discuss practical matters
- Ask about: Timeline, budget, concerns or questions
- Be honest and transparent about costs and process
- Fields to collect: publishing_timeline, budget_range, publishing_concerns

**PHASE 6: BELLWETHER FEATURES**
- Share information about our platform features
- Dashboard, analytics, marketing tools, author support
- Gauge their interest in specific features
- Fields to collect: bellwether_features_interest

**PHASE 7: CONTACT INFORMATION (Final Step)**
- Only when most other information is collected
- Ask for name and email to continue with their proposal
- Fields to collect: contact_name, contact_email

**PHASE 8: POST-REGISTRATION Q&A**
- After collecting contact info, become an open Q&A resource
- Answer any questions about publishing, our process, features
- Provide detailed information about anything they want to know

═══════════════════════════════════════════════════════════
DATA PRESENTATION
═══════════════════════════════════════════════════════════

SHOW PROGRESS:
- Periodically acknowledge what you've learned about them
- Example: "So you're a teacher working on your first mystery novel—that's exciting!"
- This builds trust and shows you're listening

The UI will display collected data in a sidebar, so focus on natural conversation.

═══════════════════════════════════════════════════════════
BELLWETHER BOOKS KNOWLEDGE
═══════════════════════════════════════════════════════════

WHAT WE ARE:
- Hybrid publishing: Traditional quality + self-publishing freedom
- Professional editing, design, distribution, marketing services
- Authors keep 100% creative control + majority of royalties
- Transparent pricing, no hidden fees

PUBLISHING PROCESS (5 Steps):
1. **Manuscript Review**: Honest assessment of your work
2. **Service Selection**: Choose editing, design, formatting, ISBN
3. **Production**: 3-6 months depending on services
4. **Distribution**: Amazon, Barnes & Noble, IngramSpark, 40,000+ retailers
5. **Launch & Support**: Marketing packages + author dashboard for analytics

PRICING (Be transparent when asked):
- **Editing**: $0.01-0.03/word (60k novel = $600-1,800)
- **Cover Design**: $500-1,500
- **Interior Formatting**: $200-400
- **Distribution Setup**: $300 (ISBN + retailer setup)
- **Marketing**: $500-5,000
- **Full Package**: $3,000-8,000 (varies by length/needs)

ROYALTIES:
- Ebooks: Authors keep 70% of net
- Print: Authors keep 50% of net
- No exclusivity, monthly payments

WHAT SETS US APART:
- **vs Self-Publishing**: Professional editing, design, wide distribution (bookstores, not just online)
- **vs Traditional Publishing**: You keep control, rights, most royalties. No years of waiting.

EARNINGS (Be realistic):
- Varies greatly by marketing effort and genre
- Example: 1,000 copies at $15 = ~$7,500 royalties
- Some authors earn six figures; most earn a few thousand first year
- Marketing is key to success

BELLWETHER FEATURES:
- **Author Dashboard**: Track sales, royalties, reader demographics
- **Analytics**: Real-time data on which channels perform best
- **Marketing Tools**: Email campaigns, social media templates, book tour support
- **Personal Consultant**: Dedicated support throughout your journey
- **Flexible Timeline**: Publish on your schedule

═══════════════════════════════════════════════════════════
YOUR CONVERSATION STYLE
═══════════════════════════════════════════════════════════

BE NATURAL & ADAPTIVE:
- Follow the phase progression, but make each conversation unique
- Spend multiple messages on topics the author cares about
- ESPECIALLY when discussing their book: explore deeply before moving to technical details
- When they share their title or story concept, ask follow-up questions to understand:
  * What's it about? Who are the main characters?
  * What inspired this story?
  * What happens in the story?
  * What themes or messages are important?
- If they ask questions, answer thoroughly before moving on
- Build genuine connection—show interest in them as a person AND their creative vision
- Acknowledge what they share: "That's fascinating that you're a teacher writing thrillers!"
- Make them EXCITED to talk about their book—be an enthusiastic listener

INFORMATION EXTRACTION (Silent):
- Extract ALL data from every message
- Map natural language intelligently
- Return in JSON format under "data" key
- But don't let data collection drive the conversation

RESPONSE FORMAT:
1. Acknowledge what they said (show you're listening)
2. Provide information if they asked a question
3. Continue conversation naturally or move to next phase
4. JSON block with extracted data

EXAMPLE - When Author Shares Book Title:
❌ BAD: "Great title! What's the word count?"
✅ GOOD: "What an intriguing title! Tell me about the story—what's it about? Who's the main character and what journey are they on?"

EXAMPLE - When Author Starts Describing Plot:
❌ BAD: "Sounds interesting. What's your manuscript status?"
✅ GOOD: "I can already feel the tension and possibilities in that setup! What happens next? How does the story unfold from there?"

PROGRESSION RULES:
- Check "Current collected data" to see what phase you're in
- Check "Next question to ask" for guidance
- DON'T ask about fields already collected
- DON'T rush through phases—let conversation breathe
- DON'T immediately jump to word count after learning the title
- DO stay on interesting topics for multiple exchanges
- DO explore their story concept deeply (2-3 exchanges minimum)
- DO provide Bellwether information when asked or relevant
- DO make the author feel heard and excited about their project

TONE:
- Warm, professional, consultative
- Like a knowledgeable friend who cares about their success
- Honest about costs and realistic about outcomes
- Encouraging but not overpromising
- Specific, not generic - reference exact details they shared
- Enthusiastic about their creative vision
- Responses: 2-5 sentences typically

AVOID GENERIC RESPONSES:
❌ "That sounds interesting. What else?"
✅ "I can already picture that scene—what an engaging setup! What happens next in the story? How do the characters react to this situation?"

❌ "Great! What's your word count?"
✅ "That's a compelling premise! How does this situation develop? What's the main conflict or journey that unfolds from here?"

FIELDS TO EXTRACT (in phase order):
current_occupation, interests, writing_experience, writing_goals, book_genre, book_title, manuscript_status, word_count, unique_selling_points, editing_level, design_needs, formats, distribution, marketing, publishing_timeline, budget_range, publishing_concerns, bellwether_features_interest, contact_name, contact_email

Remember: Start by getting to know THE PERSON, not their book. Build rapport first, then gradually move through the phases. Make it conversational, not interrogative.`;

const MODELS = {
  model1: 'openai/gpt-oss-20b',
  model2: 'meta-llama/llama-4-maverick-17b-128e-instruct',
};

export interface GroqChatResult {
  reply: string;
  extractedData: Partial<AuthorDataFields>;
}

/**
 * Helper function to delay execution
 */
async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if an error is retryable (5xx errors or network issues)
 */
function isRetryableError(error: unknown): boolean {
  const status = (error as { status?: number })?.status;
  // Retry on 5xx errors or network errors
  return (status !== undefined && status >= 500 && status < 600) || !status;
}

/**
 * Run Groq chat and extract structured data from response
 */
export async function groqChatAndExtract(
  chatHistory: ChatMessage[],
  userMessage: string,
  currentData: AuthorDataFields
): Promise<GroqChatResult> {
  // Get the next field to ask about
  const nextField = getNextUnanswered(currentData);

  // Build a summary of what we already know
  const collectedFields = Object.entries(currentData)
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => `  - ${key}: ${JSON.stringify(value)}`)
    .join('\n');

  const collectedSummary = collectedFields
    ? `\n\nAlready collected:\n${collectedFields}`
    : '\n\nNo data collected yet.';

  const nextPromptHint = nextField
    ? `\n\nNext question to ask: "${nextField.prompt}"\n(Field: ${nextField.id})`
    : '\n\n(All questions have been answered - wrap up the conversation positively)';

  // Create context message for the AI
  const contextMessage = `User's message: "${userMessage}"${collectedSummary}${nextPromptHint}

INSTRUCTIONS:
1. Extract ALL information from the user's message above
2. DO NOT ask about fields already listed in "Already collected"
3. Acknowledge what they said, then ask the next unanswered question
4. Return extracted data as JSON with key "data"`;

  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...chatHistory,
    {
      role: 'user',
      content: contextMessage,
    },
  ];

  const maxRetries = 3;
  const baseDelay = 1000; // 1 second

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const groq = getGroqClient();

      console.log(`Making Groq API request (attempt ${attempt}/${maxRetries}) with model:`, MODELS.model1);
      console.log('Message count:', messages.length);

      const response = await groq.chat.completions.create({
        model: MODELS.model1,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages: messages as any,
        max_tokens: 800,
        temperature: 0.7,
      });

      let content = response.choices[0]?.message?.content || '';
      let extractedData: Partial<AuthorDataFields> = {};

      // Extract and parse JSON block from response
      try {
        // Match JSON with or without markdown code blocks
        const jsonMatch = content.match(/```json\s*(\{[\s\S]*?\})\s*```|\{[\s\S]*\}/);
        if (jsonMatch) {
          // Use captured group if markdown format, otherwise use full match
          const jsonString = jsonMatch[1] || jsonMatch[0];
          const jsonBlock = JSON.parse(jsonString);
          if (jsonBlock.data) {
            extractedData = jsonBlock.data;
          }
          // Remove JSON block (with or without markdown) from the reply text
          content = content.replace(/```json\s*\{[\s\S]*?\}\s*```|\{[\s\S]*\}/, '').trim();
        }
      } catch (error) {
        console.error('Failed to extract JSON from Groq response:', error);
      }

      console.log('Groq API request successful');
      return {
        reply: content,
        extractedData,
      };
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Groq API error (attempt ${attempt}/${maxRetries}):`, errorMessage);

      const isLastAttempt = attempt === maxRetries;
      const shouldRetry = isRetryableError(error) && !isLastAttempt;

      if (shouldRetry) {
        // Exponential backoff: 1s, 2s, 4s
        const delayMs = baseDelay * Math.pow(2, attempt - 1);
        console.log(`Retrying in ${delayMs}ms...`);
        await delay(delayMs);
        continue;
      }

      // If we've exhausted retries or it's a non-retryable error
      const errorObj = error as { status?: number; statusText?: string; message?: string };
      console.error('Error details:', {
        status: errorObj.status,
        statusText: errorObj.statusText,
        message: errorObj.message,
      });

      throw new Error(
        errorObj.status === 500 || errorObj.status === 502 || errorObj.status === 503
          ? 'The AI service is temporarily unavailable. Please try again in a moment.'
          : `Failed to get response from AI: ${errorObj.message || 'Unknown error'}`
      );
    }
  }

  // This should never be reached, but TypeScript needs it
  throw new Error('Failed to get response from AI after multiple attempts');
}

/**
 * Generate author persona from conversation history
 */
export async function generateAuthorPersona(
  chatHistory: ChatMessage[]
): Promise<AuthorPersona> {
  const conversationText = chatHistory
    .map((msg) => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join('\n\n');

  const messages: ChatMessage[] = [
    { role: 'system', content: PERSONA_GENERATION_PROMPT },
    {
      role: 'user',
      content: `Here is the conversation to analyze:\n\n${conversationText}\n\nPlease generate a comprehensive author persona based on this conversation.`,
    },
  ];

  const maxRetries = 3;
  const baseDelay = 1000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const groq = getGroqClient();

      console.log(`Generating persona (attempt ${attempt}/${maxRetries})`);

      const response = await groq.chat.completions.create({
        model: MODELS.model1,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        messages: messages as any,
        max_tokens: 2000,
        temperature: 0.3, // Lower temperature for more consistent persona extraction
      });

      const content = response.choices[0]?.message?.content || '';

      // Extract and parse JSON from response
      try {
        const jsonMatch = content.match(/```json\s*(\{[\s\S]*?\})\s*```|\{[\s\S]*\}/);
        if (jsonMatch) {
          const jsonString = jsonMatch[1] || jsonMatch[0];
          const parsed = JSON.parse(jsonString);

          if (parsed.persona) {
            console.log('Persona generated successfully');
            return parsed.persona as AuthorPersona;
          }
        }

        // If no proper JSON found, throw error
        throw new Error('No valid persona JSON in response');
      } catch (parseError) {
        console.error('Failed to parse persona JSON:', parseError);
        throw new Error('Failed to generate valid persona data');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Persona generation error (attempt ${attempt}/${maxRetries}):`, errorMessage);

      const isLastAttempt = attempt === maxRetries;
      const shouldRetry = isRetryableError(error) && !isLastAttempt;

      if (shouldRetry) {
        const delayMs = baseDelay * Math.pow(2, attempt - 1);
        console.log(`Retrying in ${delayMs}ms...`);
        await delay(delayMs);
        continue;
      }

      const errorObj = error as { status?: number; message?: string };
      throw new Error(
        errorObj.status === 500 || errorObj.status === 502 || errorObj.status === 503
          ? 'The AI service is temporarily unavailable. Please try again in a moment.'
          : `Failed to generate persona: ${errorObj.message || 'Unknown error'}`
      );
    }
  }

  throw new Error('Failed to generate persona after multiple attempts');
}
