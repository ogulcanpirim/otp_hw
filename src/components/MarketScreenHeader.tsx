import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../store/hooks';
import type { RootStackParamList } from '../navigation/types';
import { useCourseTheme } from '../theme';

type Nav = NativeStackNavigationProp<RootStackParamList>;

/**
 * Opens the AddMarketItem modal (`presentation: 'modal'` in the stack).
 */
export function MarketHeaderAddButton() {
  const { t } = useTranslation();
  const navigation = useNavigation<Nav>();
  const theme = useCourseTheme();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('header.accessibility.addMarketItem')}
      onPress={() => navigation.navigate('AddMarketItem')}
      style={styles.hit}
    >
      <Text style={[styles.icon, { color: theme.colors.ink }]}>➕</Text>
    </Pressable>
  );
}

/**
 * Template header controls for the Market screen (students may swap icons / layout).
 * Cart shows a **numeric badge** matching `shoppingList.items.length` (include 0 per assignment).
 */
export function MarketHeaderCartButton() {
  const { t } = useTranslation();
  const navigation = useNavigation<Nav>();
  const theme = useCourseTheme();
  const count = useAppSelector((s) => s.shoppingList.items.length);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('header.accessibility.shoppingList')}
      onPress={() => navigation.navigate('ShoppingList')}
      style={styles.hit}
    >
      <Text style={[styles.icon, { color: theme.colors.ink }]}>🛒</Text>
      <View style={[styles.badge, { backgroundColor: theme.colors.accent }]}>
        <Text style={[styles.badgeText, { color: theme.colors.accentFg }]}>{count}</Text>
      </View>
    </Pressable>
  );
}

/**
 * Plus (add item) sits beside the shopping list on the **leading** side of the Market header.
 */
export function MarketHeaderLeadingGroup() {
  return (
    <View style={styles.leading}>
      <MarketHeaderAddButton />
      <MarketHeaderCartButton />
    </View>
  );
}

export function MarketHeaderTrailingButtons() {
  const { t } = useTranslation();
  const navigation = useNavigation<Nav>();
  const theme = useCourseTheme();

  return (
    <View style={styles.trailing}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('header.accessibility.profile')}
        onPress={() => navigation.navigate('Profile')}
        style={styles.hit}
      >
        <Text style={[styles.icon, { color: theme.colors.ink }]}>👤</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('header.accessibility.settings')}
        onPress={() => navigation.navigate('Settings')}
        style={styles.hit}
      >
        <Text style={[styles.icon, { color: theme.colors.ink }]}>⚙️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hit: {
    position: 'relative',
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  icon: {
    fontSize: 20,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
