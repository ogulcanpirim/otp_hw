import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

export type ThemeState = {
  mode: ThemeMode;
};

const initialState: ThemeState = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    /**
     * [Homework] setThemeMode
     * - Set `state.mode` from payload.
     * - Persisted via redux-persist whitelist in the store template—verify rehydration.
     * - Apply to React Navigation theme / `StatusBar` / any styled components you add.
     * - `useCourseTheme()` and `courseColors` in `src/theme` already react to `state.theme.mode`—keep new UI on those tokens.
     */
    setThemeMode: (state, _action: PayloadAction<ThemeMode>) => {
      return state;
    },

    /**
     * [Homework] toggleTheme
     * - Switch between light and dark (and optionally sync with system appearance later).
     */
    toggleTheme: (_state) => {
      return _state;
    },
  },
});

export const { setThemeMode, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
