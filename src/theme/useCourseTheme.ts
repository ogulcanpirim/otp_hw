import { useMemo } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';
import { useAppSelector } from '../store/hooks';
import type { ThemeMode } from '../store/slices/themeSlice';
import { courseColors } from './colors';
import { courseSpacing } from './spacing';
import { courseTypography } from './typography';

function withColor(base: TextStyle, color: string): TextStyle {
  return { ...base, color };
}

/**
 * Resolves homework / template UI from Redux `theme.mode` and the shared course tokens.
 * Use `text.*` and `layout.*` for explanatory screens so light/dark stay consistent.
 */
export function useCourseTheme() {
  const mode = useAppSelector((s) => s.theme.mode) as ThemeMode;
  const c = courseColors[mode];

  return useMemo(() => {
    const s = courseSpacing;
    return {
      mode,
      colors: c,
      spacing: s,
      typography: courseTypography,
      text: {
        display: withColor(courseTypography.display, c.ink),
        screenHeading: withColor(courseTypography.heading, c.ink),
        screenLead: withColor(courseTypography.lead, c.inkSecondary),
        bullet: withColor(courseTypography.body, c.ink),
        panelTitle: withColor(courseTypography.panelTitle, c.ink),
        meta: withColor(courseTypography.caption, c.inkSecondary),
        buttonLabel: withColor(courseTypography.buttonLabel, c.accentFg),
      },
      layout: {
        screen: {
          flex: 1,
          padding: s.xl,
          gap: s.lg,
          backgroundColor: c.canvas,
        } satisfies ViewStyle,
        scroll: {
          flex: 1,
          backgroundColor: c.canvas,
        } satisfies ViewStyle,
        scrollContent: {
          paddingHorizontal: s.xl,
          paddingTop: s.lg,
          paddingBottom: s.xxxl,
          gap: s.lg,
          backgroundColor: c.canvas,
        } satisfies ViewStyle,
        panel: {
          borderRadius: 12,
          borderWidth: 1,
          borderColor: c.panelBorder,
          backgroundColor: c.panelBg,
          padding: s.lg,
          gap: s.sm,
        } satisfies ViewStyle,
        panelBody: {
          gap: s.sm,
        } satisfies ViewStyle,
        button: {
          backgroundColor: c.accent,
          paddingVertical: s.buttonPadV,
          borderRadius: 10,
          alignItems: 'center',
        } satisfies ViewStyle,
        loading: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: c.canvas,
        } satisfies ViewStyle,
      },
    };
  }, [mode, c]);
}
