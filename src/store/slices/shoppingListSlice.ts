import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { MarketItem } from '../../types/market';

/**
 * Homework: minimal cart line. `id` is the only identifier required by this template—use it with `removeItem`.
 * You may change how rows render (FlatList layout, quantity UI, etc.) as long as the slice contract stays clear.
 */
export type ShoppingListEntry = Pick<MarketItem, 'id' | 'title' | 'price'>;

export type ShoppingListState = {
  items: ShoppingListEntry[];
};

const initialState: ShoppingListState = {
  items: [],
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    /**
     * [Homework] addItem (or addToShoppingList)
     * - Append a new `ShoppingListEntry` to `state.items` (must include `id`, `title`, `price`).
     * - Duplicate handling (merge vs multiple rows) is up to you—`id` alone is enough for `removeItem` in the simplest case.
     */
    addItem: (state, _action: PayloadAction<ShoppingListEntry>) => {
      return state;
    },

    /**
     * [Homework] removeItem
     * - Remove the entry whose `id` matches `action.payload.id`.
     * - Wire your row UI however you like; only `id` is required to identify the row for removal.
     */
    removeItem: (state, _action: PayloadAction<{ id: string }>) => {
      return state;
    },

    /**
     * [Homework] clearList
     * - Reset `items` to an empty array after a **successful** checkout (never clear if payment failed).
     * - Pair with `userWallet.completeCheckout`: only call `clearList` when funds were sufficient and wallet slice updated.
     */
    clearList: (_state) => {
      return _state;
    },
  },
});

/**
 * Homework (selectors): add `createSelector` (or inline `useMemo`) to derive `cartTotal` from `items`
 * (typically sum of each line’s `price`). Use that total for the shopping list footer and to compare against
 * `state.userWallet.moneyRemaining` before checkout.
 */

export const { addItem, removeItem, clearList } = shoppingListSlice.actions;
export const shoppingListReducer = shoppingListSlice.reducer;
