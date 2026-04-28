# Market homework (React Native)

Template for a **marketplace-style** assignment: mock REST API with **Mirage**, client data with **Redux Toolkit** + **RTK Query**, **redux-persist** (MMKV), **React Navigation**, and **i18next**. Most business logic and UI are **intentionally left for students**; screens list requirements in homework panels.

---

## Prerequisites and running the app

1. Complete the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment).
2. Install dependencies: `npm install`
3. iOS (first time / after native dep changes): `bundle install` then `bundle exec pod install` from the `ios` directory as needed.
4. Start Metro: `npm start`
5. Run the app: `npm run ios` or `npm run android`

Unit tests: `npm test`

---

## What you need to implement (by area)

### 1. Navigation and entry flow

- The stack **starts on `Market`** (`src/navigation/RootNavigator.tsx`).
- **`AddMarketItem`** is registered with **`presentation: 'modal'`**; open it from the **+** control in the Market header (`src/components/MarketScreenHeader.tsx`).
- **Leading header (Market):** **+** (add item modal) and **cart** (shopping list). The cart shows a **numeric badge** equal to `shoppingList.items.length` (including `0`).
- **Trailing header (Market):** shortcuts to **Profile** and **Settings**.
- Types for routes live in `src/navigation/types.ts`.

**Your tasks:** replace emoji placeholders with real icons if required; ensure all navigations work; keep the badge in sync with the shopping list.

---

### 2. Market catalog (`src/screens/MarketScreen.tsx`)

- Fetch catalog data with **RTK Query** (you define endpoints in `src/store/api/marketApi.ts`).
- Render the list with **loading / error / success** states; show `imageUrl`, `title`, `description`, and `price` per item.
- **Bonus:** support **pagination** against Mirage (see section 5): optional `page` and `pageSize` query params; when both are omitted, the API returns the full list.
- Use **`useCourseTheme()`** and tokens under `src/theme` for new UI (colors, spacing, typography helpers).

**Your tasks:** implement the query hook, list UI, optional pagination UX, and any “add to cart” actions that dispatch `addItem` with `{ id, title, price }` per `ShoppingListEntry`.

---

### 3. Add market item modal (`src/screens/AddMarketItemScreen.tsx`)

- This screen is the place for the **create item** flow and homework copy for the form.
- Submit **`POST /api/markets`** via your RTK Query **mutation** (defined in `marketApi.ts`).
- Mirage requires **`title`** and **`price`**; handle validation and API errors in the UI.
- On success: refresh list data (tags / invalidation), then **`goBack()`** to close the modal.

**Your tasks:** controlled form, mutation wiring, success/error UX, dismiss modal.

---

### 4. Shopping list (`src/screens/ShoppingListScreen.tsx`)

- Implement **`shoppingListSlice`** reducers: `addItem`, `removeItem`, `clearList` (`src/store/slices/shoppingListSlice.ts`). Each line is identified by **`id`** only (no separate line id in the template).
- Render the cart; **footer** with **running total** (sum of `price`) and a **Checkout** button.
- **Checkout:** compare total to **`userWallet.moneyRemaining`**. If the total is greater than the balance, **block** checkout (no wallet update, no `clearList`). If sufficient: dispatch **`completeCheckout`** then **`clearList`** (only after a successful wallet update).
- Persisted slice: verify behavior after app restart (`redux-persist` whitelist includes `shoppingList`).

**Your tasks:** slice logic, list UI, footer, checkout rules, optional confirmation dialogs.

---

### 5. Mock API (Mirage) (`src/mirage/server.ts`, `src/mirage/bootstrap.ts`)

- **`GET /api/markets`:** returns `{ items, total }`. Seeded with **24** sample items.
- **Pagination (bonus):** if both **`page`** (1-based) and **`pageSize`** are provided, response includes a page slice plus `page`, `pageSize`, and `total`. If either query param is missing, **all** items are returned.
- **`POST /api/markets`:** creates an item; returns **400** if `title` or `price` is missing.

**Your tasks:** extend validation, errors, or extra routes only if your assignment asks for it; align TypeScript types with `src/types/market.ts` (`MarketItem`, `MarketListResponse`).

---

### 6. RTK Query (`src/store/api/marketApi.ts`, `src/store/api/axiosBaseQuery.ts`)

- `createApi` is set up with **`axiosBaseQuery`** (works with Mirage on React Native). **`endpoints` is empty**; you add the query and mutation.
- **`tagTypes`** includes `'Market'` as an example; you must connect **`providesTags`** / **`invalidatesTags`** so list data updates after creates.

**Your tasks:** implement `GET` and `POST` endpoints, export generated hooks, and document cache behavior in code comments if your course requires it.

---

### 7. Wallet and profile (`src/store/slices/userWalletSlice.ts`, `src/screens/ProfileScreen.tsx`)

- State includes **`moneyRemaining`** (seed value in the slice) and **`previousCheckouts`** (history records).
- **`completeCheckout`** reducer is a stub: implement deduction, append history, and guard when total exceeds balance.
- **Profile** screen: show balance and checkout history per homework copy.

**Your tasks:** implement wallet reducers and Profile UI; keep currency units consistent with item `price`.

---

### 8. Theme and settings (`src/store/slices/themeSlice.ts`, `src/screens/SettingsScreen.tsx`)

- **`theme.mode`** drives **`useCourseTheme()`** and navigation chrome colors (`courseColors` merged in `RootNavigator`).
- Implement **`setThemeMode`** / **`toggleTheme`**; apply dark/light across the app as required.
- **Settings:** language via **`languageSlice`** **and** **`i18n.changeLanguage`**; strings live in `src/locales/en.json` and `src/locales/tr.json` (English default).

**Your tasks:** theme reducers, UI controls, i18n sync, optional `StatusBar` tweaks.

---

### 9. Internationalization (`src/i18n/index.ts`, `src/locales/*.json`)

- **English** is default; **Turkish** strings mirror the same keys.
- Add keys as you add UI; keep locales aligned.

**Your tasks:** wire `setLocale` (or equivalent) so Redux and `i18next` stay in sync.

---

### 10. Persistence (`src/store/index.ts`, `src/store/persistStorage.ts`)

- **redux-persist** with **MMKV** adapter.
- **Whitelist:** `shoppingList`, `userWallet`, `theme`, `language`. **RTK Query** reducer is **not** persisted.

**Your tasks:** adjust whitelist/blacklist only if the assignment allows it; confirm rehydration in manual tests.

---

### 11. Shared styling (`src/theme/`)

- **`courseColors`**, **`courseSpacing`**, **`courseTypography`**, and **`useCourseTheme()`** centralize light/dark styles for template and homework text.
- Use these for new components instead of one-off hex values unless you extend the shared tokens.

**Your tasks:** extend tokens if you add new semantic colors or scales.

---

## Project layout (high level)

| Path | Role |
|------|------|
| `App.tsx` | Providers, Mirage bootstrap, persist gate |
| `src/navigation/` | Stack navigator, route types |
| `src/screens/` | Feature screens + homework copy |
| `src/components/` | Reusable UI (e.g. header, homework panel) |
| `src/store/` | Redux store, slices, RTK Query API |
| `src/mirage/` | Mock server factory and dev bootstrap |
| `src/theme/` | Course theme tokens and hook |
| `src/i18n/`, `src/locales/` | i18next setup and JSON translations |
| `src/types/` | Shared TS types (e.g. `MarketItem`) |

---

## Troubleshooting

See the official [React Native troubleshooting guide](https://reactnative.dev/docs/troubleshooting). Clear Metro cache with `npx react-native start --reset-cache` if bundling behaves oddly after dependency changes.
