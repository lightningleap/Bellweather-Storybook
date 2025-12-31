import { BELLWETHER_FLOW, REQUIRED_FIELDS } from './schema';
import { AuthorDataFields, FlowField } from '@/types/acquisition';

/**
 * Calculate progress percentage based on completed required fields
 */
export function calculateProgress(data: AuthorDataFields): number {
  const requiredFields = BELLWETHER_FLOW.filter((f) => f.required);
  const total = requiredFields.length;

  if (total === 0) return 0;

  const filled = requiredFields.filter((f) => {
    const value = data[f.id as keyof AuthorDataFields];
    return value !== null && value !== undefined && value !== '';
  }).length;

  return Math.round((filled / total) * 100);
}

/**
 * Get the next unanswered field in the flow
 */
export function getNextUnanswered(data: AuthorDataFields): FlowField | null {
  const ordered = [...BELLWETHER_FLOW].sort((a, b) => a.order - b.order);

  for (const field of ordered) {
    const value = data[field.id as keyof AuthorDataFields];
    if (value === null || value === undefined || value === '') {
      return field;
    }
  }

  return null;
}

/**
 * Merge new data into existing data
 */
export function mergeAuthorData(
  currentData: AuthorDataFields,
  newData: Partial<AuthorDataFields>
): AuthorDataFields {
  const merged = { ...currentData };

  for (const [key, value] of Object.entries(newData)) {
    // Only merge non-empty values
    if (
      value !== null &&
      value !== undefined &&
      value !== '' &&
      !(Array.isArray(value) && value.length === 0) &&
      !(typeof value === 'object' && Object.keys(value).length === 0)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      merged[key as keyof AuthorDataFields] = value as any;
    }
  }

  return merged;
}

/**
 * Check if all required fields are complete
 */
export function isFlowComplete(data: AuthorDataFields): boolean {
  return REQUIRED_FIELDS.every((fieldId) => {
    const value = data[fieldId as keyof AuthorDataFields];
    return value !== null && value !== undefined && value !== '';
  });
}
