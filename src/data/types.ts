// ──────────────────────────────────────────────────────────────
// Product data model for One Click Enterprises
//
// Hierarchy:  Category → Product → (optional SubProduct) → Variant
//
// A Product can either have variants directly, OR contain subProducts
// (each with their own variants). This lets categories like "Stones"
// contain sub-groups like Quartz, Cobbles, Granite, etc.
// ──────────────────────────────────────────────────────────────

export interface ProductVariant {
  /** Display name, e.g. "Alaska" or "Model 7023" */
  name: string;
  /** Optional detail shown next to the variant, e.g. a model number or size */
  detail?: string;
  /**
   * Per-variant image path (relative to /public/variants/).
   * If you provide a photo named correctly in the variants folder, it
   * will be picked up automatically.  If null/undefined, the product's
   * fallback image is used.
   *
   * The resolved URL is built as:
   *   /variants/{productId}/{variantSlug}.jpg
   *
   * See public/variants/README.md for the naming convention.
   */
  image?: string | null;
}

export interface SubProduct {
  /** Unique within the parent product, e.g. "quartz", "cobbles-stone" */
  id: string;
  name: string;
  description?: string;
  sizes?: string[];
  variants: ProductVariant[];
  /** Fallback image for this sub-product (used when a variant has no photo) */
  image: string;
}

export interface Product {
  /** Unique slug, e.g. "bathroom-tiles", "stones" */
  id: string;
  name: string;
  category: string;
  icon: string;
  sizes: string[];
  description: string;
  /** Fallback image for the product / all its variants */
  image: string;
  /**
   * Either `variants` (flat product) or `subProducts` (grouped product).
   * A grouped product like "Stones" has subProducts instead of variants.
   */
  variants?: ProductVariant[];
  subProducts?: SubProduct[];
}

export const productCategories = [
  'All',
  'Tiles',
  'Terracotta',
  'Sanitary',
  'Doors',
  'Digital Locks',
  'Stones',
  'Decorative',
  'Adhesive',
  'Kitchen',
  'Bathroom',
];
