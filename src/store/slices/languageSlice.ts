import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AppLocale = 'en' | 'tr';

export type LanguageState = {
  locale: AppLocale;
};

const initialState: LanguageState = {
  locale: 'en',
};

/**
 * Homework: keep this slice in sync with i18next (`i18n.changeLanguage`) from Settings.
 * Persisted in the store whitelist alongside theme and shopping list.
 */
export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    /**
     * [Homework] setLocale
     * - Validate payload is a supported `AppLocale`.
     * - Call `i18n.changeLanguage` (see `src/i18n/index.ts`) when this action dispatches.
     * - Consider using a listener middleware or dispatching from the screen—choose one pattern and document it.
     */
    setLocale: (state, _action: PayloadAction<AppLocale>) => {
      return state;
    },
  },
});

export const { setLocale } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
