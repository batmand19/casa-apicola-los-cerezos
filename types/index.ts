/**
 * Shared type definitions — Casa Apícola Los Cerezos
 */

// ─── Products ───────────────────────────────────────────────

export interface ProductSize {
  label: string;
  price: number;
}

export interface ProductSensory {
  color: string;
  aroma: string;
  sabor: string;
  textura: string;
}

export interface ProductDescription {
  floral: string;
  sensory: ProductSensory;
  usos: string;
  almacenamiento: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  badge?: string;
  tags: string[];
  description: ProductDescription;
  sizes: ProductSize[];
  image: string;
  images: Record<string, string>;
}

// ─── Cart ───────────────────────────────────────────────────

export interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartProduct {
  id: string;
  name: string;
  size: string;
  price: number;
  image?: string;
}

// ─── Articles ───────────────────────────────────────────────

export type ContentBlockType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'list'
  | 'tip'
  | 'warning'
  | 'quote';

export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  items?: string[];
}

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: ContentBlock[];
  keywords?: string;
}

// ─── Guide ──────────────────────────────────────────────────

export interface Recipe {
  name: string;
  time: string;
  servings?: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
}

export interface EquivalencyRow {
  sugar: string;
  honey: string;
  liquid: string;
}

export interface GuideChapter {
  number: number;
  title: string;
  recipes?: Recipe[];
  isTable?: boolean;
  table?: EquivalencyRow[];
  note?: string;
  isTips?: boolean;
  tips?: string[];
}

export interface Guide {
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  location: string;
  intro: string;
  chapters: GuideChapter[];
}

// ─── Schema.org ─────────────────────────────────────────────

export interface SchemaProduct {
  name: string;
  description: string;
  image?: string;
  lowPrice: number;
  highPrice: number;
}

export interface SchemaArticle {
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  slug: string;
  keywords?: string;
}

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

// ─── Tracking ───────────────────────────────────────────────

export interface TrackViewProduct {
  id: string;
  name: string;
  category: string;
  size: string;
  price: number;
}

export interface TrackSelectVariant {
  productId: string;
  productName: string;
  oldSize: string;
  newSize: string;
  price: number;
}

export interface TrackAddToCart {
  productId: string;
  productName: string;
  size: string;
  price: number;
  quantity: number;
}

export interface TrackBeginCheckout {
  items: CartItem[];
  total: number;
}

// ─── GA4 ────────────────────────────────────────────────────

export interface GAItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  price: number;
  quantity?: number;
  item_variant?: string;
  index?: number;
}
