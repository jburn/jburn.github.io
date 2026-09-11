import type { Localized } from '../i18n';

export const categories = ['music', 'film', 'books'] as const;
export interface TasteEntry {
  title: string;
  creator: string;
  category: typeof categories[number];
  note: Localized;
  href?: string;
}

// A future build-time Discogs adapter can supply music entries here.
export const taste: TasteEntry[] = [];
