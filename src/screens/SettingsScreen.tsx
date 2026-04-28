import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeworkPanel } from '../components/HomeworkPanel';
import { useCourseTheme } from '../theme';

export function SettingsScreen() {
  const { t, i18n } = useTranslation();
  const theme = useCourseTheme();

  return (
    <ScrollView style={theme.layout.scroll} contentContainerStyle={theme.layout.scrollContent}>
      <Text style={theme.text.screenHeading}>{t('screens.settings.title')}</Text>
      <Text style={theme.text.screenLead}>{t('screens.settings.body')}</Text>
      <Text style={theme.text.meta}>Current i18n language (library): {i18n.language}</Text>

      <HomeworkPanel title="Settings — implementation checklist">
        <Text style={theme.text.bullet}>
          • Theme: dispatch `setThemeMode` / `toggleTheme` after implementing reducers in `themeSlice.ts`. Navigation
          chrome uses the same palette as `courseColors` in `src/theme/colors.ts`.
        </Text>
        <Text style={theme.text.bullet}>
          • Language: dispatch `setLocale` from `languageSlice.ts` **and** call `i18n.changeLanguage('en' | 'tr')` so UI
          strings from `src/locales/*.json` update immediately.
        </Text>
        <Text style={theme.text.bullet}>
          • Add segmented controls or pickers for theme + language; persist both via the existing persist whitelist.
        </Text>
        <Text style={theme.text.bullet}>
          • English is the default; Turkish strings live in `src/locales/tr.json`—keep keys identical across locales.
        </Text>
        <Text style={theme.text.bullet}>
          • Extend shared styling only via `src/theme` (`courseColors`, `courseSpacing`, `courseTypography`,
          `useCourseTheme`).
        </Text>
        <Text style={theme.text.bullet}>
          • Wallet and checkout history live on **Profile** (`userWallet` slice)—keep Settings focused on theme/locale.
        </Text>
      </HomeworkPanel>
    </ScrollView>
  );
}
