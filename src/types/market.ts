/**
 * Homework: align these types with your Mirage handlers and RTK Query endpoints.
 */
export type MarketItem = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
};

/**
 * `GET /api/markets` response shape from Mirage:
 * - Without `page` **and** `pageSize` query params: returns **all** items plus `total`.
 * - With both params: returns one page plus `page`, `pageSize`, and `total` (full catalog size).
 */
export type MarketListResponse = {
  items: MarketItem[];
  total: number;
  page?: number;
  pageSize?: number;
};
