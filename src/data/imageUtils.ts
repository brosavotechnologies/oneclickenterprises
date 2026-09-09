// ──────────────────────────────────────────────────────────────
// Image-path helpers
//
// Variant photos live in:  public/variants/{productId}/{slug}.jpg
//
// The slug is derived from the variant name:
//   1. Lowercase
//   2. Replace anything that is not a letter, number, or hyphen with a hyphen
//   3. Collapse multiple hyphens into one
//   4. Strip leading/trailing hyphens
//
// Example:  "Model 7023" → "model-7023"
//           "Black Galaxy" → "black-galaxy"
//           "Pencil Mate — Golden" → "pencil-mate-golden"
//
// If a file at the generated path does not exist, the <VariantImage>
// component automatically falls back to the parent product's image.
// ──────────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Returns the expected public path for a variant photo.
 * Does NOT guarantee the file exists — the <VariantImage> component
 * handles the fallback when the file is missing.
 */
export function variantImagePath(
  productId: string,
  variantName: string,
  ext: string = 'jpg',
): string {
  return `/variants/${productId}/${slugify(variantName)}.${ext}`;
}

/**
 * Returns the expected public path for a sub-product variant photo.
 * Sub-product photos are stored one level deeper:
 *   /variants/{productId}/{subProductId}/{slug}.jpg
 */
export function subVariantImagePath(
  productId: string,
  subProductId: string,
  variantName: string,
  ext: string = 'jpg',
): string {
  return `/variants/${productId}/${subProductId}/${slugify(variantName)}.${ext}`;
}
