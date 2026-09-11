// ──────────────────────────────────────────────────────────────
// Product data model for One Click Enterprises
//
// Hierarchy: Category → Product → (optional SubProduct) → Variant
//
// A Product can either have variants directly, OR contain subProducts
// (each with their own variants). This lets categories like "Stones"
// contain sub-groups like Quartz, Cobbles, Granite, etc.
// ──────────────────────────────────────────────────────────────

export interface ProductPdf {
  /** Display name shown in the product modal */
  name: string;

  /** Public URL of the PDF file */
  file: string;
}

export interface ProductVariant {
  /** Display name, e.g. "Alaska" or "Model 7023" */
  name: string;

  /** Optional detail shown next to the variant, e.g. a model number or size */
  detail?: string;

  /**
   * Per-variant image path.
   *
   * The resolved URL is built as:
   * /variants/{productId}/{variantSlug}.jpg
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

  /** Fallback image for this sub-product */
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
   * Either variants (flat product) or subProducts (grouped product).
   */
  variants?: ProductVariant[];

  subProducts?: SubProduct[];

  /**
   * Optional product PDF documents.
   *
   * If this property is missing or empty, the PDF UI will not appear.
   */
  pdfs?: ProductPdf[];
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