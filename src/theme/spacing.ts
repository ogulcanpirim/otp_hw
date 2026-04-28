/**
 * Course spacing scale (px). Use these values for padding, gaps, and margins—do not invent ad hoc numbers.
 */
export const courseSpacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  /** Primary button vertical padding (matches template buttons). */
  buttonPadV: 14,
} as const;

export type CourseSpacingKey = keyof typeof courseSpacing;
