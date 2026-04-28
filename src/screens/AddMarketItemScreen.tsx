import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeworkPanel } from '../components/HomeworkPanel';
import { useCourseTheme } from '../theme';

/**
 * Modal for creating a catalog item. Requirements are listed for students; wire `navigation.goBack()` after success.
 */
export function AddMarketItemScreen() {
  const { t } = useTranslation();
  const theme = useCourseTheme();

  return (
    <ScrollView style={theme.layout.scroll} contentContainerStyle={theme.layout.scrollContent}>
      <Text style={theme.text.screenHeading}>{t('screens.addMarketItem.title')}</Text>
      <Text style={theme.text.screenLead}>{t('screens.addMarketItem.body')}</Text>

      <HomeworkPanel title="Add market item — implementation checklist">
        <Text style={theme.text.bullet}>
          • Build a **controlled form** (title, description, price, optional image URL) validated before submit.
        </Text>
        <Text style={theme.text.bullet}>
          • Call your `POST /api/markets` RTK Query **mutation** from `marketApi.ts`; map Mirage rules: `title` and
          `price` are required server-side.
        </Text>
        <Text style={theme.text.bullet}>
          • On **success**: invalidate or refetch list tags so Market reflects the new row, then `goBack()` to dismiss
          this modal.
        </Text>
        <Text style={theme.text.bullet}>
          • On **error**: show the API message (e.g. 400 body) without closing the modal so the user can fix inputs.
        </Text>
        <Text style={theme.text.bullet}>
          • Prefer disabling the submit button while the mutation is pending; show a loading indicator if you like.
        </Text>
        <Text style={theme.text.bullet}>
          • Keep styling on `useCourseTheme()` / `src/theme` tokens; match the rest of the homework app.
        </Text>
      </HomeworkPanel>
    </ScrollView>
  );
}
