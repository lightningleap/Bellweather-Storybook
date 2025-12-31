/**
 * Quick reply options for different field types in the trial chat
 * These appear as clickable buttons to help users answer questions faster
 */

export const QUICK_REPLY_OPTIONS: Record<string, string[]> = {
  // NOTE: Only include quick replies for questions with clear, limited options
  // Open-ended questions (occupation, interests, goals, concerns, etc.) should NOT have quick replies

  // Writing experience - clear experience levels
  writing_experience: [
    "First-time author",
    "Written before (unpublished)",
    "Previously published",
    "Professional writer",
  ],

  // Book genre - standard genres
  book_genre: [
    "Fiction",
    "Non-Fiction",
    "Mystery/Thriller",
    "Romance",
    "Sci-Fi/Fantasy",
    "Memoir",
    "Self-Help",
    "Business",
    "Young Adult",
    "Children's",
    "Poetry",
    "Other",
  ],

  // Manuscript status - clear stages
  manuscript_status: [
    "Just starting",
    "First draft in progress",
    "First draft complete",
    "Edited draft",
    "Ready for publication",
  ],

  // Editing level needed - specific service options
  editing_level: [
    "Developmental editing",
    "Copy editing",
    "Proofreading only",
    "Full package (all levels)",
    "Not sure yet",
    "Don't need editing",
  ],

  // Design needs - clear yes/no options
  design_needs: [
    "Yes, full cover & interior design",
    "Just cover design",
    "Just interior formatting",
    "No, I'll handle design myself",
    "Not sure yet",
  ],

  // Formats (multi-select) - specific format options
  formats: [
    "Hardcover",
    "Paperback",
    "Ebook",
    "Audiobook",
    "All formats",
  ],

  // Distribution preferences - clear distribution strategies
  distribution: [
    "Wide distribution (bookstores + online)",
    "Online only (Amazon, etc.)",
    "Limited/specific platforms",
    "Not sure yet",
  ],

  // Marketing interest - clear levels of interest
  marketing: [
    "Yes, full marketing support",
    "Some marketing help",
    "No, I'll market myself",
    "Not sure yet",
  ],

  // Publishing timeline - clear time ranges
  publishing_timeline: [
    "ASAP (1-3 months)",
    "Moderate (3-6 months)",
    "Flexible (6-12 months)",
    "No rush (12+ months)",
  ],

  // Budget range - clear price ranges
  budget_range: [
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $8,000",
    "$8,000+",
    "Not sure yet",
  ],

  // Bellwether features interest - clear interest levels
  bellwether_features_interest: [
    "Very interested",
    "Somewhat interested",
    "Want to learn more",
    "Not a priority",
  ],
};

/**
 * Fields that support multi-select
 */
export const MULTI_SELECT_FIELDS = ['formats'];

/**
 * Get quick reply options for a specific field
 */
export function getQuickReplyOptions(fieldId: string): string[] | null {
  return QUICK_REPLY_OPTIONS[fieldId] || null;
}

/**
 * Check if a field supports multi-select
 */
export function isMultiSelectField(fieldId: string): boolean {
  return MULTI_SELECT_FIELDS.includes(fieldId);
}
