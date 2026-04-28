import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeworkPanel } from '../components/HomeworkPanel';
import { useCourseTheme } from '../theme';

export function ProfileScreen() {
  const { t } = useTranslation();
  const theme = useCourseTheme();

  return (
    <ScrollView style={theme.layout.scroll} contentContainerStyle={theme.layout.scrollContent}>
      <Text style={theme.text.screenHeading}>{t('screens.profile.title')}</Text>
      <Text style={theme.text.screenLead}>{t('screens.profile.body')}</Text>

      <HomeworkPanel title="Profile — implementation checklist">
        <Text style={theme.text.bullet}>
          • Read `state.userWallet.moneyRemaining` and show it prominently (same currency unit as market `price`).
        </Text>
        <Text style={theme.text.bullet}>
          • Render `state.userWallet.previousCheckouts` (empty state vs list). Each row should show at least total,
          line count, and when the checkout happened (`checkedOutAt`).
        </Text>
        <Text style={theme.text.bullet}>
          • This screen is the “receipt history + balance” view; **checkout** itself is triggered from the Shopping
          list screen but must update this slice via `completeCheckout` when payment succeeds.
        </Text>
        <Text style={theme.text.bullet}>
          • Optional: add a “demo top-up” control for grading—if you add a reducer, document it and guard it from
          production builds if required.
        </Text>
        <Text style={theme.text.bullet}>
          • Style with `useCourseTheme()` / `src/theme` tokens only.
        </Text>
      </HomeworkPanel>
    </ScrollView>
  );
}
