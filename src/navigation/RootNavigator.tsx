import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { AddMarketItemScreen } from '../screens/AddMarketItemScreen';
import { MarketScreen } from '../screens/MarketScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ShoppingListScreen } from '../screens/ShoppingListScreen';
import { useAppSelector } from '../store/hooks';
import type { ThemeMode } from '../store/slices/themeSlice';
import { courseColors } from '../theme/colors';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function navigationChrome(mode: ThemeMode) {
  const c = courseColors[mode];
  return {
    primary: c.accent,
    background: c.canvas,
    card: c.canvas,
    text: c.ink,
    border: c.border,
    notification: c.accent,
  };
}

/**
 * Merges React Navigation defaults with `courseColors` so headers match homework surfaces.
 */
export function RootNavigator() {
  const { t } = useTranslation();
  const mode = useAppSelector((s) => s.theme.mode);
  const base = mode === 'dark' ? DarkTheme : DefaultTheme;
  const chrome = navigationChrome(mode);

  const navTheme = {
    ...base,
    dark: mode === 'dark',
    colors: {
      ...base.colors,
      ...chrome,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Market">
        <Stack.Screen name="Market" component={MarketScreen} options={{ title: t('nav.market') }} />
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingListScreen}
          options={{ title: t('nav.shoppingList') }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: t('nav.profile') }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: t('nav.settings') }} />
        <Stack.Screen
          name="AddMarketItem"
          component={AddMarketItemScreen}
          options={{
            title: t('nav.addMarketItem'),
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
