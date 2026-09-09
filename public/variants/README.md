# Variant Photo Folder

This folder holds per-variant product photos. The website automatically
looks for photos here based on the **product ID** and the **variant name**.
If a photo is missing, a default fallback image is shown instead — so you
can add photos gradually without anything breaking.

## Naming Convention

### Flat products (most products)

```
public/variants/{productId}/{variant-slug}.jpg
```

### Grouped products (e.g. "Stones" with sub-products like Quartz, Cobbles)

```
public/variants/{productId}/{subProductId}/{variant-slug}.jpg
```

## How the slug is generated

The variant name is converted to a slug automatically:

1. Lowercase everything
2. Replace every character that is NOT a letter, number, or hyphen with a hyphen
3. Collapse multiple consecutive hyphens into one
4. Strip leading/trailing hyphens

### Examples

| Variant name           | Slug                  | File path                                    |
|------------------------|-----------------------|----------------------------------------------|
| Alaska                 | `alaska`              | `variants/granite-stones/alaska.jpg`         |
| Black Galaxy           | `black-galaxy`        | `variants/granite-stones/black-galaxy.jpg`   |
| Model 7023             | `model-7023`          | `variants/hilton-doors/model-7023.jpg`       |
| Pencil Mate — Golden   | `pencil-mate-golden`  | `variants/decorative-tiles/pencil-mate-golden.jpg` |
| Matrix White           | `matrix-white`        | `variants/double-charge-tiles/matrix-white.jpg` |

## For grouped products (Stones)

The Stones product (`productId: "stones"`) has sub-products. Each
sub-product has its own folder inside `variants/stones/`:

```
public/variants/stones/granite/alaska.jpg
public/variants/stones/granite/black-galaxy.jpg
public/variants/stones/marble/katni-marble.jpg
public/variants/stones/quartz/digital-quartz-plain-black.jpg
public/variants/stones/cobbles-stone/black.jpg
public/variants/stones/cobbles-stone/grey.jpg
public/variants/stones/decorative-stones/mandir.jpg
```

## Supported file formats

Use `.jpg` by default. You can also use `.png` or `.webp` — just make
sure the file extension matches. The slug generation is the same
regardless of extension.

## Quick start

1. Look at the product's `id` in `src/data/products.ts`
2. Create a folder: `public/variants/{productId}/`
3. Name your photo file using the slug of the variant name
4. Drop it in the folder — the website will pick it up automatically

That's it. No code changes needed.
