import type { TextStyle } from 'react-native';

/**
 * Font metrics only (no colors). Combine with `courseColors[mode]` in `useCourseTheme`.
 * Homework: use these roles consistently—display/heading for hierarchy, body for dense copy, etc.
 */
export const courseTypography = {
  display: { fontSize: 28, lineHeight: 34, fontWeight: '700' } satisfies TextStyle,
  heading: { fontSize: 24, lineHeight: 30, fontWeight: '700' } satisfies TextStyle,
  title: { fontSize: 22, lineHeight: 28, fontWeight: '700' } satisfies TextStyle,
  lead: { fontSize: 16, lineHeight: 24, fontWeight: '400' } satisfies TextStyle,
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400' } satisfies TextStyle,
  caption: { fontSize: 13, lineHeight: 18, fontWeight: '500' } satisfies TextStyle,
  label: { fontSize: 14, lineHeight: 20, fontWeight: '600' } satisfies TextStyle,
  panelTitle: { fontSize: 16, lineHeight: 22, fontWeight: '700' } satisfies TextStyle,
  buttonLabel: { fontSize: 16, lineHeight: 22, fontWeight: '600' } satisfies TextStyle,
} as const;
