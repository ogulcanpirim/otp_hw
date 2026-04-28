import type { ThemeMode } from '../store/slices/themeSlice';

/**
 * Semantic colors for each mode. Extend this object when adding new UI—keep light/dark pairs aligned.
 */
export const courseColors: Record<
  ThemeMode,
  {
    canvas: string;
    ink: string;
    inkSecondary: string;
    border: string;
    accent: string;
    accentFg: string;
    panelBg: string;
    panelBorder: string;
  }
> = {
  light: {
    canvas: '#ffffff',
    ink: '#0f172a',
    inkSecondary: '#475569',
    border: '#e2e8f0',
    accent: '#2563eb',
    accentFg: '#ffffff',
    panelBg: '#eff6ff',
    panelBorder: '#c5d4f0',
  },
  dark: {
    canvas: '#0b1220',
    ink: '#f8fafc',
    inkSecondary: '#cbd5e1',
    border: '#334155',
    accent: '#60a5fa',
    accentFg: '#0f172a',
    panelBg: '#1e293b',
    panelBorder: '#475569',
  },
};
