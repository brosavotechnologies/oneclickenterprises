import { useState, useMemo } from 'react';
import {
  DoorOpen,
  Grid3x3,
  Layers,
  Lock,
  Mountain,
  Droplets,
  ChefHat,
  Sparkles,
  Search,
  ChevronDown,
  ChevronRight,
  X,
  Phone,
  ArrowRight,
  ImageIcon,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useRouter } from '@/components/Router';
import { VariantImage } from '@/components/VariantImage';
import { products } from '@/data/products';
import { Product, SubProduct, productCategories } from '@/data/types';
import { variantImagePath, subVariantImagePath } from '@/data/imageUtils';
import { supportInfo } from '@/data/locations';

const iconMap: Record<string, typeof DoorOpen> = {
  DoorOpen,
  Grid3x3,
  Layers,
  Lock,
  Mountain,
  Droplets,
  ChefHat,
  Sparkles,
  Bath: Droplets,
  Car: DoorOpen,
  Home: DoorOpen,
  TreePine: Grid3x3,
  Waves: Droplets,
  Grid2x2: Grid3x3,
  Package: Layers,
  Stairs: Layers,
  Gem: Sparkles,
};

function getVariantCount(p: Product): number {
  if (p.subProducts) {
    return p.subProducts.reduce((sum, sp) => sum + sp.variants.length, 0);
  }
  return p.variants?.length ?? 0;
}

function getVariantList(p: Product): string[] {
  if (p.subProducts) {
    return p.subProducts.flatMap((sp) => sp.variants.map((v) => v.name));
  }
  return p.variants?.map((v) => v.name) ?? [];
}

export function ProductsPage() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const variantNames = getVariantList(p);
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.subProducts?.some((sp) =>
          sp.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) ?? false) ||
        variantNames.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumbs crumbs={[{ label: 'Products' }]} />

      {/* Header */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Products</h1>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto">
            Explore our comprehensive catalog of premium doors, tiles, sanitary ware, granite,
            smart locks, and building materials.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search products, sizes, varieties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === cat
                      ? 'bg-amber-500 text-stone-900'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 text-sm text-stone-500">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-400 text-lg">No products found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const Icon = iconMap[product.icon] || DoorOpen;
              const variantCount = getVariantCount(product);
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="relative h-56 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 text-white text-xs font-medium">
                      {product.category}
                    </div>
                    {product.subProducts && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/90 text-stone-900 text-xs font-semibold">
                        {product.subProducts.length} Sub-Categories
                      </div>
                    )}
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-opacity flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                      <span className="text-white text-sm font-medium flex items-center gap-1">
                        View Details <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-amber-600" />
                      <h3 className="font-semibold text-stone-800">{product.name}</h3>
                    </div>
                    <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Sizes */}
                    {product.sizes.length > 0 && (
                      <div className="mt-3">
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">
                          Sizes
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {product.sizes.slice(0, 4).map((size) => (
                            <span
                              key={size}
                              className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs"
                            >
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 4 && (
                            <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs">
                              +{product.sizes.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sub-product names (for grouped products) */}
                    {product.subProducts && (
                      <div className="mt-3">
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">
                          Includes
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {product.subProducts.slice(0, 4).map((sp) => (
                            <span
                              key={sp.id}
                              className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs"
                            >
                              {sp.name}
                            </span>
                          ))}
                          {product.subProducts.length > 4 && (
                            <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs">
                              +{product.subProducts.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Variant count (for flat products) */}
                    {product.variants && product.variants.length > 0 && (
                      <div className="mt-3">
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">
                          {variantCount} Variet{variantCount === 1 ? 'y' : 'ies'}
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {product.variants.slice(0, 3).map((v) => (
                            <span
                              key={v.name}
                              className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs"
                            >
                              {v.name}
                            </span>
                          ))}
                          {product.variants.length > 3 && (
                            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs">
                              +{product.variants.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-4 w-full py-2 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-1.5"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Product detail modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onContact={() => {
            setSelectedProduct(null);
            navigate('/contact');
          }}
        />
      )}

      {/* CTA */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Can't find what you're looking for?
          </h2>
          <p className="text-stone-400 mb-6">
            We have even more products in-store. Call us for any specific requirements.
          </p>
          <a
            href={`tel:${supportInfo.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            {supportInfo.phone}
          </a>
        </div>
      </section>
    </div>
  );
}

// ─────────────────────────────────────────────
//  Product detail modal
//  Shows variant photos (with fallback) or
//  sub-product variant photos for grouped items.
// ─────────────────────────────────────────────
function ProductModal({
  product,
  onClose,
  onContact,
}: {
  product: Product;
  onClose: () => void;
  onContact: () => void;
}) {
  const Icon = iconMap[product.icon] || DoorOpen;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-56 sm:h-64">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/60 text-white flex items-center justify-center hover:bg-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-900/80 text-white text-xs font-medium">
            {product.category}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Icon className="w-5 h-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-stone-900">{product.name}</h2>
          </div>
          <p className="text-stone-600 leading-relaxed">{product.description}</p>

          {/* Product PDF documents */}
          {product.pdfs && product.pdfs.length > 0 && (
            <section className="mt-6">
              <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wide mb-3">
                Product Documents
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {product.pdfs.map((pdf) => (
                  <a
                    key={pdf.file}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 transition-colors hover:border-amber-400 hover:bg-amber-50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-700">
                        PDF
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-stone-800">
                          {pdf.name}
                        </p>

                        <p className="mt-1 text-xs text-stone-500">
                          Open document
                        </p>
                      </div>
                    </div>

                    <ArrowRight className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-600" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wide mb-3">
                Available Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-sm font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Flat product: variant gallery */}
          {product.variants && product.variants.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-stone-800 uppercase tracking-wide mb-3">
                Varieties ({product.variants.length})
              </h3>
              <VariantGallery
                productId={product.id}
                fallback={product.image}
                variants={product.variants}
              />
            </div>
          )}

          {/* Grouped product: sub-products with variant galleries */}
          {product.subProducts && (
            <div className="mt-6 space-y-8">
              {product.subProducts.map((sp) => (
                <SubProductSection
                  key={sp.id}
                  productId={product.id}
                  subProduct={sp}
                />
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${supportInfo.phone.replace(/\s/g, '')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Enquire
            </a>
            <button
              onClick={onContact}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-stone-300 text-stone-700 font-semibold hover:bg-stone-50 transition-colors"
            >
              Visit Contact Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  Sub-product section (for grouped products)
// ─────────────────────────────────────────────
function SubProductSection({
  productId,
  subProduct,
}: {
  productId: string;
  subProduct: SubProduct;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <ChevronRight className="w-4 h-4 text-amber-600" />
        <h4 className="text-lg font-semibold text-stone-800">{subProduct.name}</h4>
        <span className="text-xs text-stone-400">
          {subProduct.variants.length} variet{subProduct.variants.length === 1 ? 'y' : 'ies'}
        </span>
      </div>
      {subProduct.description && (
        <p className="text-sm text-stone-500 mb-3">{subProduct.description}</p>
      )}
      {subProduct.sizes && subProduct.sizes.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {subProduct.sizes.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      <VariantGallery
        productId={productId}
        subProductId={subProduct.id}
        fallback={subProduct.image}
        variants={subProduct.variants}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
//  Variant gallery — shows a card per variant
//  with its own photo (or fallback image).
// ─────────────────────────────────────────────
function VariantGallery({
  productId,
  fallback,
  variants,
  subProductId,
}: {
  productId: string;
  fallback: string;
  variants: { name: string; detail?: string }[];
  subProductId?: string;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {variants.map((v) => {
        const imgSrc = subProductId
          ? subVariantImagePath(productId, subProductId, v.name)
          : variantImagePath(productId, v.name);
        return (
          <div
            key={v.name}
            className="rounded-lg overflow-hidden border border-stone-200 group"
          >
            <div className="relative h-32 bg-stone-100 overflow-hidden">
              <VariantImage
                src={imgSrc}
                fallback={fallback}
                alt={v.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-stone-900/50 flex items-center justify-center" title="Demo photo — replace with actual product photo">
                <ImageIcon className="w-3 h-3 text-white/70" />
              </div>
            </div>
            <div className="p-2">
              <p className="text-xs font-medium text-stone-700 truncate">{v.name}</p>
              {v.detail && (
                <p className="text-[10px] text-stone-400 truncate">{v.detail}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
