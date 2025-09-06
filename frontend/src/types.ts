// frontend/src/types.ts
export interface UrlRow {
  id: string;
  original_url: string;
  short_url: string;
  created_at: string;
  qr?: string | null;
  title?: string | null;
}

export interface ClickRow {
  id: string;
  url_id: string;
  country?: string | null;
  city?: string | null;
  created_at: string;
}
