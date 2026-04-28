import { createServer, Model, Response } from 'miragejs';
import type { MarketItem } from '../types/market';

const CATALOG_SEED_COUNT = 24;

function buildSeedItems(count: number): MarketItem[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    const price = Math.round((4.99 + (i % 11) * 2.15 + (i % 3) * 0.5) * 100) / 100;
    return {
      id: String(n),
      imageUrl: `https://picsum.photos/seed/market-${n}/200/200`,
      title: `Catalog item ${n}`,
      description: `Homework seed ${n}. Implement list UI, pagination, and filters as specified.`,
      price,
    };
  });
}

const seedItems = buildSeedItems(CATALOG_SEED_COUNT);

/**
 * **GET /api/markets pagination (bonus):**
 * - Optional query: `page` (1-based) and `pageSize` (positive int, capped at 100).
 * - If **either** is missing, the handler returns **every** item (same as unpaginated).
 * - If **both** are present, returns `{ items, page, pageSize, total }` where `items` is the slice for that page.
 */
export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      market: Model.extend<Partial<MarketItem>>({}),
    },

    seeds(server) {
      seedItems.forEach((item) => {
        server.create('market', item);
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/markets', (schema, request) => {
        const all = schema.all('market').models.map((m) => m.attrs as MarketItem);
        const total = all.length;
        const rawPage = request.queryParams.page;
        const rawSize = request.queryParams.pageSize;

        if (rawPage == null || rawPage === '' || rawSize == null || rawSize === '') {
          return { items: all, total };
        }

        const page = Math.max(1, parseInt(String(rawPage), 10) || 1);
        const pageSize = Math.min(100, Math.max(1, parseInt(String(rawSize), 10) || 10));
        const start = (page - 1) * pageSize;
        const items = all.slice(start, start + pageSize);

        return { items, page, pageSize, total };
      });

      this.post('/markets', (schema, request) => {
        const attrs = JSON.parse(request.requestBody || '{}') as Partial<MarketItem>;
        if (!attrs.title || attrs.price == null) {
          return new Response(400, {}, { error: 'title and price are required' });
        }
        const item = schema.create('market', {
          id: String(Date.now()),
          imageUrl:
            attrs.imageUrl ?? `https://picsum.photos/seed/${Date.now()}/200/200`,
          title: attrs.title,
          description: attrs.description ?? '',
          price: Number(attrs.price),
        });
        return item.attrs as MarketItem;
      });
    },
  });
}
