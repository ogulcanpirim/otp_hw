import { ScrollView, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeworkPanel } from '../components/HomeworkPanel';
import { useCourseTheme } from '../theme';

export function ShoppingListScreen() {
  const { t } = useTranslation();
  const theme = useCourseTheme();

  return (
    <ScrollView style={theme.layout.scroll} contentContainerStyle={theme.layout.scrollContent}>
      <Text style={theme.text.screenHeading}>{t('screens.shoppingList.title')}</Text>
      <Text style={theme.text.screenLead}>{t('screens.shoppingList.body')}</Text>

      <HomeworkPanel title="Shopping list — implementation checklist">
        <Text style={theme.text.bullet}>
          • Select `state.shoppingList.items` with `useAppSelector` and render an empty state when the array is empty.
          Keep the count **in sync** with the **cart badge** on the Market header (`items.length`).
        </Text>
        <Text style={theme.text.bullet}>
          • Implement `addItem` in `shoppingListSlice` so Market rows push lines with `id`, `title`, and `price`; layout
          and list UI are up to you.
        </Text>
        <Text style={theme.text.bullet}>
          • Implement `removeItem` with a control per row; dispatch a payload whose `id` field matches the entry to
          remove.
        </Text>
        <Text style={theme.text.bullet}>
          • **Footer:** keep a **running total** (sum of all line `price` values) visible at the **bottom** of the screen
          (sticky footer, `ListFooterComponent`, or a column layout with the list in `flex:1`—your choice).
        </Text>
        <Text style={theme.text.bullet}>
          • **Checkout button** (near the total): on press, compute the cart total. Compare it to
          `state.userWallet.moneyRemaining`. If the total is **greater than** `moneyRemaining`, show an error and **do not**
          clear the cart
          or record a checkout.
        </Text>
        <Text style={theme.text.bullet}>
          • If funds are sufficient: dispatch `completeCheckout` from `userWalletSlice` with a payload containing
          `total` and `lineCount`, then dispatch `clearList` from `shoppingListSlice`. Order matters—only clear after the
          wallet update succeeds.
        </Text>
        <Text style={theme.text.bullet}>
          • Optional: confirm dialog before checkout; surface disabled checkout styling when total is 0 or over budget.
        </Text>
        <Text style={theme.text.bullet}>
          • Verify persistence: cart and wallet both use the store whitelist—relaunch the app and confirm state survives.
        </Text>
      </HomeworkPanel>
    </ScrollView>
  );
}
