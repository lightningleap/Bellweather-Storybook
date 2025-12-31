import { FlowField } from '@/types/acquisition';

export const BELLWETHER_FLOW: FlowField[] = [
  // Persona Building - Start with general questions about the person
  {
    id: 'current_occupation',
    prompt: "What do you currently do for work or how do you spend most of your time?",
    required: false,
    order: 1,
  },
  {
    id: 'interests',
    prompt: "What topics or subjects are you most passionate about?",
    required: false,
    order: 2,
  },
  {
    id: 'writing_experience',
    prompt: "Tell me about your writing background. Are you a first-time author, or have you written before?",
    required: false,
    order: 3,
  },
  {
    id: 'writing_goals',
    prompt: "What are your main goals with your writing? What would success look like for you?",
    required: false,
    order: 4,
  },

  // Book Information
  {
    id: 'book_genre',
    prompt: "What genre or category would you say your book falls into?",
    required: true,
    order: 5,
  },
  {
    id: 'book_title',
    prompt: "What's the title of your book, or what working title are you using?",
    required: true,
    order: 6,
  },
  {
    id: 'word_count',
    prompt: "What's the approximate word count of your manuscript?",
    required: true,
    order: 7,
  },
  {
    id: 'manuscript_status',
    prompt: "What's the current status of your manuscript (draft, edited, or ready for publication)?",
    required: true,
    order: 8,
  },
  {
    id: 'unique_selling_points',
    prompt: 'What makes your book unique or different from others in this genre?',
    required: false,
    order: 9,
  },

  // Publishing Services
  {
    id: 'editing_level',
    prompt: 'What level of editing does your manuscript need (developmental, copyediting, proofreading)?',
    required: true,
    order: 10,
  },
  {
    id: 'design_needs',
    prompt: 'Would you like our team to handle the cover and interior design?',
    required: false,
    order: 11,
  },
  {
    id: 'formats',
    prompt: 'Which formats are you interested in—hardcover, paperback, ebook, audiobook, or a combination?',
    required: false,
    order: 12,
  },
  {
    id: 'distribution',
    prompt: 'Would you like us to handle distribution, or do you have specific platforms in mind?',
    required: true,
    order: 13,
  },
  {
    id: 'marketing',
    prompt: 'Are you interested in marketing support like podcast appearances, reviews, or promotional campaigns?',
    required: false,
    order: 14,
  },

  // Publishing Process Questions
  {
    id: 'publishing_timeline',
    prompt: 'What timeline are you hoping for to get your book published?',
    required: false,
    order: 15,
  },
  {
    id: 'budget_range',
    prompt: 'Do you have a budget range in mind for your publishing journey?',
    required: false,
    order: 16,
  },
  {
    id: 'publishing_concerns',
    prompt: 'What questions or concerns do you have about the publishing process?',
    required: false,
    order: 17,
  },

  // Bellwether Features
  {
    id: 'bellwether_features_interest',
    prompt: 'Would you like to learn more about specific Bellwether features like our author dashboard, analytics, or marketing tools?',
    required: false,
    order: 18,
  },

  // Contact Information - Last
  {
    id: 'contact_name',
    prompt: 'Great! What name should we use when we reach out to you?',
    required: true,
    order: 19,
  },
  {
    id: 'contact_email',
    prompt: 'Perfect! What email address would you like us to use to send you more information and your publishing proposal?',
    required: true,
    order: 20,
  },
];

export const REQUIRED_FIELDS = BELLWETHER_FLOW.filter((f) => f.required).map(
  (f) => f.id
);

// Transition phrases for natural flow
export const TRANSITIONS = [
  'Great!',
  'Perfect, thanks for sharing.',
  'Awesome — next up:',
  "Got it! Let's move to the next part:",
  "Nice, let's talk about:",
];
