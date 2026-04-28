import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

/**
 * Market API slice — shell only. Students implement all `endpoints` below.
 *
 * Mirage (see `src/mirage/server.ts`) already exposes:
 * - `GET /api/markets` → `{ items, total }` (always includes `total` item count).
 *   **Pagination (bonus):** optional query params `page` (1-based) **and** `pageSize`. If either is missing, **all**
 *   items are returned. If both are set, response is `{ items, page, pageSize, total }` with a single page slice
 *   (`pageSize` capped at 100). See `MarketListResponse` in `src/types/market.ts`.
 * - `POST /api/markets` → creates an item (see server for validation rules)
 *
 * ---------------------------------------------------------------------------
 * tagTypes (cache labels)
 * ---------------------------------------------------------------------------
 * Declare every string you will pass to `providesTags` / `invalidatesTags` in `tagTypes`.
 * Example: `tagTypes: ['Market']` lets you tag list data as type `'Market'`.
 *
 * - **providesTags** (on queries, optional on mutations): tells RTK Query which cached
 *   pieces this result “owns”. Use lists like `[{ type: 'Market', id: 'LIST' }]` for a
 *   collection, or `[{ type: 'Market', id: arg.id }]` for a single entity when you add
 *   a detail endpoint later.
 *
 * - **invalidatesTags** (usually on mutations): lists tags that must be refetched or
 *   dropped so the UI stays fresh. After `POST /api/markets`, invalidate the list tag
 *   so the next read of the markets query refetches (e.g. `[{ type: 'Market', id: 'LIST' }]`).
 *
 * Flow: query provides tags → mutation invalidates overlapping tags → affected queries
 * refetch automatically (when subscribed). Same idea for optimistic updates / `onQueryStarted`
 * is advanced homework.
 *
 * ---------------------------------------------------------------------------
 * Your tasks
 * ---------------------------------------------------------------------------
 * - Add a **query** for `GET /api/markets` (typed `ResultType`, `ArgType` as needed).
 * - Add a **mutation** for `POST /api/markets` with a sensible request body type; use it from **`AddMarketItemScreen`**
 *   (modal opened from the **+** header action on Market).
 * - Export the generated hooks from this file (e.g. `export const { useXQuery, useYMutation } = marketApi`).
 * - Wire `providesTags` / `invalidatesTags` so creating an item refreshes the list.
 */
export const marketApi = createApi({
  reducerPath: 'marketApi',
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  /** Register tag type names used by `providesTags` / `invalidatesTags` in your endpoints. */
  tagTypes: ['Market'],
  endpoints: () => ({}),
});
