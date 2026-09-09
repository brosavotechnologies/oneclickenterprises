import {
  DoorOpen,
  Grid3x3,
  Layers,
  Lock,
  Mountain,
  Droplets,
  ChefHat,
  Sparkles,
  ArrowRight,
  Truck,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
} from 'lucide-react';
import { useRouter } from '@/components/Router';
import { products } from '@/data/products';
import { officeLocations, supportInfo } from '@/data/locations';

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
  Car: Truck,
  Home: DoorOpen,
  TreePine: Grid3x3,
  Waves: Droplets,
  Grid2x2: Grid3x3,
  Package: ShieldCheck,
  Stairs: Layers,
  Gem: Sparkles,
};

const featureItems = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Only the finest materials from trusted brands and manufacturers.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    desc: 'Serving customers across India with reliable logistics from 4 cities.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Since Years',
    desc: 'A reputation built on quality products and honest service.',
  },
  {
    icon: MapPin,
    title: '4 Branch Offices',
    desc: 'Delhi NCR, Jabalpur, Nagpur & Indore with warehouses.',
  },
];

export function HomePage() {
  const { navigate } = useRouter();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8134757/pexels-photo-8134757.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Modern interior with premium doors"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-stone-900/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-medium mb-4">
              Doors &middot; Tiles &middot; Sanitary &middot; Granite &middot; More
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium Building Materials,
              <span className="text-amber-400"> One Click Away</span>
            </h1>
            <p className="mt-6 text-lg text-stone-300 leading-relaxed">
              One Click Enterprises brings you an extensive collection of Hilton designer doors,
              ceramic and floor tiles, terracotta jali, sanitary ware, digital smart locks, granite,
              and more — all under one roof.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors shadow-lg"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-stone-600 text-white font-semibold hover:bg-stone-800 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featureItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-800">{item.title}</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
            Featured Products
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            A glimpse of our wide range of building materials and home improvement products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => {
            const Icon = iconMap[product.icon] || DoorOpen;
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 text-white text-xs font-medium">
                    {product.category}
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
                  {product.sizes.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.sizes.slice(0, 3).map((size) => (
                        <span
                          key={size}
                          className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs"
                        >
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-xs">
                          +{product.sizes.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-stone-300 text-stone-700 font-semibold hover:border-amber-500 hover:text-amber-600 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Category overview */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900">
              Everything for Your Home & Business
            </h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              From doors to tiles to sanitary ware — we are your one-stop destination.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Hilton Designer Doors', icon: DoorOpen, count: '50+ Models' },
              { name: 'Floor & Wall Tiles', icon: Grid3x3, count: '100+ Varieties' },
              { name: 'Terracotta Jali & Bricks', icon: Layers, count: '15+ Designs' },
              { name: 'Sanitary Ware', icon: Droplets, count: '10+ Types' },
              { name: 'Digital Smart Locks', icon: Lock, count: '8 Models' },
              { name: 'Granite & Marble', icon: Mountain, count: '20+ Varieties' },
              { name: 'Decorative Tiles', icon: Sparkles, count: '5+ Finishes' },
              { name: 'Kitchen Sinks & Vanity', icon: ChefHat, count: 'Multiple Sizes' },
            ].map((cat) => (
              <div
                key={cat.name}
                onClick={() => navigate('/products')}
                className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-100 transition-colors">
                  <cat.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-sm font-semibold text-stone-800">{cat.name}</h3>
                <p className="text-xs text-stone-400 mt-1">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-stone-400 mt-4 max-w-xl mx-auto">
            Get in touch with our team for product enquiries, bulk orders, and best prices.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${supportInfo.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call {supportInfo.phone}
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-stone-600 text-white font-semibold hover:bg-stone-800 transition-colors"
            >
              Visit Our Offices
              <MapPin className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-stone-500">
            {officeLocations.map((loc, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {loc.city}
                {loc.branchType === 'Warehouse' ? ' (Warehouse)' : ''}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
