import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useLayoutEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MarketHeaderLeadingGroup, MarketHeaderTrailingButtons } from '../components/MarketScreenHeader';
import { HomeworkPanel } from '../components/HomeworkPanel';
import type { RootStackParamList } from '../navigation/types';
import { useCourseTheme } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Market'>;

export function MarketScreen({ navigation }: Props) {
  const { t } = useTranslation();
  const theme = useCourseTheme();

  const renderHeaderLeft = useCallback(() => <MarketHeaderLeadingGroup />, []);
  const renderHeaderRight = useCallback(() => <MarketHeaderTrailingButtons />, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft,
      headerRight: renderHeaderRight,
    });
  }, [navigation, renderHeaderLeft, renderHeaderRight]);

  return (
    <ScrollView style={theme.layout.scroll} contentContainerStyle={theme.layout.scrollContent}>
      <Text style={theme.text.screenHeading}>{t('screens.market.title')}</Text>
      <Text style={theme.text.screenLead}>{t('screens.market.body')}</Text>

      <HomeworkPanel title="Market screen — implementation checklist">
        <Text style={theme.text.bullet}>
          • The app **launches on Market**; header **leading** side: **plus** opens the **Add market item** modal, cart
          opens the shopping list; **trailing**: Profile and Settings (emoji placeholders—replace with vector icons if
          you prefer).
        </Text>
        <Text style={theme.text.bullet}>
          • **Badge requirement:** the cart header control must show a **numeric badge** that always reflects
          `shoppingList.items.length` (same number users see when they open the list).
        </Text>
        <Text style={theme.text.bullet}>
          • In `marketApi.ts`, define a query for `GET /api/markets`, export the generated hook, and render loading /
          error / data states on this screen.
        </Text>
        <Text style={theme.text.bullet}>
          • **Bonus — pagination:** Mirage supports optional `page` (1-based) and `pageSize` query params. If either is
          omitted, the server returns the **full** catalog. If both are sent, the response includes a page slice plus
          `total` (and `page` / `pageSize`). Wire infinite scroll or “Load more” in RTK Query.
        </Text>
        <Text style={theme.text.bullet}>
          • Display each item’s `imageUrl`, `title`, `description`, and `price` (use `Image`, typography hierarchy, and
          accessible labels).
        </Text>
        <Text style={theme.text.bullet}>
          • Implement **create item** on the **AddMarketItem** modal (`AddMarketItemScreen.tsx`): mutation for
          `POST /api/markets`, dismiss on success, errors stay on the form.
        </Text>
        <Text style={theme.text.bullet}>
          • After a successful create, ensure the Market list reflects the new item (tags + invalidation in RTK Query).
        </Text>
        <Text style={theme.text.bullet}>
          • Hook “Add to shopping list” buttons that dispatch `addItem` with at least `id`, `title`, and `price` per
          `ShoppingListEntry`.
        </Text>
        <Text style={theme.text.bullet}>
          • Mirage mock lives in `src/mirage/server.ts`—see pagination rules above; extend filters or sorting as stretch
          goals.
        </Text>
        <Text style={theme.text.bullet}>
          • For new UI, use `useCourseTheme()` plus `courseSpacing` / `courseTypography` from `src/theme`—do not add
          unrelated font sizes or raw hex colors.
        </Text>
      </HomeworkPanel>
    </ScrollView>
  );
}
