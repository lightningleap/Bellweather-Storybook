import { AuthorDataFields } from '@/types/acquisition';
import { calculateProgress } from './utils';

export type VisualType =
  | 'pricing_breakdown'
  | 'timeline_visualization'
  | 'roi_projection'
  | 'progress_indicator';

export interface VisualTrigger {
  type: VisualType;
  shouldShow: (data: AuthorDataFields) => boolean;
  priority: number; // Lower number = higher priority
}

/**
 * Define when each visual should appear
 */
export const VISUAL_TRIGGERS: VisualTrigger[] = [
  // Show pricing breakdown after word count is collected
  {
    type: 'pricing_breakdown',
    shouldShow: (data) => {
      const wordCount = data.word_count;
      return (
        wordCount !== null &&
        wordCount !== undefined &&
        wordCount !== '' &&
        typeof wordCount === 'string' &&
        parseInt(wordCount) > 0
      );
    },
    priority: 1,
  },

  // Show timeline when they ask about publishing timeline or after budget is discussed
  {
    type: 'timeline_visualization',
    shouldShow: (data) => {
      return (
        data.publishing_timeline !== null &&
        data.publishing_timeline !== undefined &&
        data.publishing_timeline !== ''
      );
    },
    priority: 2,
  },

  // Show ROI projection after budget range is collected
  {
    type: 'roi_projection',
    shouldShow: (data) => {
      return (
        data.budget_range !== null &&
        data.budget_range !== undefined &&
        data.budget_range !== ''
      );
    },
    priority: 3,
  },

  // Show progress indicator periodically (every 5 fields or so)
  {
    type: 'progress_indicator',
    shouldShow: (data) => {
      const progress = calculateProgress(data);
      // Show at 25%, 50%, 75% milestones
      return progress >= 25 && progress % 25 === 0;
    },
    priority: 4,
  },
];

/**
 * Get which visuals should be shown based on current data
 * Returns only the highest priority visual that hasn't been shown yet
 */
export function getVisualToShow(
  data: AuthorDataFields,
  shownVisuals: Set<VisualType>
): VisualType | null {
  // Find all visuals that should show and haven't been shown yet
  const candidateVisuals = VISUAL_TRIGGERS.filter(
    (trigger) => trigger.shouldShow(data) && !shownVisuals.has(trigger.type)
  );

  // Return the highest priority one (lowest number)
  if (candidateVisuals.length === 0) return null;

  candidateVisuals.sort((a, b) => a.priority - b.priority);
  return candidateVisuals[0].type;
}

/**
 * Check if we should show a visual after the AI's latest response
 */
export function shouldShowVisualNow(
  data: AuthorDataFields,
  shownVisuals: Set<VisualType>,
  lastAddedField?: string
): VisualType | null {
  // Special cases: show certain visuals immediately after specific fields
  const immediateVisualMap: Record<string, VisualType> = {
    word_count: 'pricing_breakdown',
    publishing_timeline: 'timeline_visualization',
    budget_range: 'roi_projection',
  };

  if (lastAddedField && immediateVisualMap[lastAddedField]) {
    const visualType = immediateVisualMap[lastAddedField];
    if (!shownVisuals.has(visualType)) {
      return visualType;
    }
  }

  // Otherwise, check general triggers
  return getVisualToShow(data, shownVisuals);
}

/**
 * Parse word count from various string formats
 */
export function parseWordCount(wordCount: string | number | null | undefined): number {
  if (!wordCount) return 0;
  if (typeof wordCount === 'number') return wordCount;

  // Remove commas and any non-digit characters except decimal point
  const cleaned = wordCount.replace(/[^\d.]/g, '');
  const parsed = parseFloat(cleaned);

  return isNaN(parsed) ? 0 : Math.round(parsed);
}

/**
 * Parse budget range to get midpoint value
 */
export function parseBudgetRange(budgetRange: string | null | undefined): number {
  if (!budgetRange) return 5000; // default

  // Extract numbers from string like "$3,000 - $5,000"
  const numbers = budgetRange.match(/\d+/g);
  if (!numbers || numbers.length === 0) return 5000;

  if (numbers.length === 1) {
    return parseInt(numbers[0]);
  }

  // Return midpoint of range
  const low = parseInt(numbers[0]);
  const high = parseInt(numbers[1]);
  return Math.round((low + high) / 2);
}
