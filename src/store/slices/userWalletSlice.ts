import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

/**
 * One saved checkout after the user pays for their cart (template shape—adjust fields as needed).
 */
export type CheckoutRecord = {
  id: string;
  total: number;
  lineCount: number;
  /** ISO timestamp string recommended for serialization / persistence. */
  checkedOutAt: string;
};

export type UserWalletState = {
  /**
   * Funds available in the **same currency unit** as `price` on `MarketItem` / cart lines.
   * Checkout must compare cart total against this value.
   */
  moneyRemaining: number;
  /** Newest-first or oldest-first—pick one convention and document it in the Profile UI. */
  previousCheckouts: CheckoutRecord[];
};

const initialState: UserWalletState = {
  moneyRemaining: 1000,
  previousCheckouts: [],
};

export const userWalletSlice = createSlice({
  name: 'userWallet',
  initialState,
  reducers: {
    /**
     * [Homework] completeCheckout (or split into thunk + reducers)
     * - Input: at least `{ total, lineCount }` for the cart being purchased; generate `id` + `checkedOutAt` here or in the caller.
     * - **Guard:** if `total > state.moneyRemaining`, do **not** mutate balance or history (no-op or throw in dev only—prefer no-op + UI error).
     * - On success: subtract `total` from `moneyRemaining`, prepend/append a `CheckoutRecord` to `previousCheckouts`.
     * - After this succeeds, the Shopping list screen should dispatch `clearList` (same tick or sequential dispatches).
     * - Optional: expose a small `topUpBalance` reducer for demos / tests only.
     */
    completeCheckout: (state, _action: PayloadAction<{ total: number; lineCount: number }>) => {
      return state;
    },
  },
});

export const { completeCheckout } = userWalletSlice.actions;
export const userWalletReducer = userWalletSlice.reducer;
