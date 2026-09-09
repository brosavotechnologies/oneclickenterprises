import { Target, Eye, Users, TrendingUp, Award, Truck, Building2, Heart } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useRouter } from '@/components/Router';
import { officeLocations } from '@/data/locations';

const values = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'We source only from trusted brands and manufacturers, ensuring every product meets our quality standards.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    desc: 'Our customers are at the heart of everything we do. We listen, advise, and deliver on our promises.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    desc: 'From a single office to four branches across India, we keep expanding to serve you better.',
  },
  {
    icon: Heart,
    title: 'Honest Service',
    desc: 'Transparent pricing, genuine products, and after-sales support you can rely on.',
  },
];

const milestones = [
  { year: 'Early Days', title: 'Founded in Jabalpur', desc: 'One Click Enterprises began its journey from Jabalpur, Madhya Pradesh.' },
  { year: 'Expansion', title: 'Nagpur Branch', desc: 'Opened our Nagpur office to serve the Maharashtra region.' },
  { year: 'Growth', title: 'Indore Branch', desc: 'Expanded to Indore with One Click Enterprises Pvt. Ltd.' },
  { year: 'Today', title: 'Pan-India Presence', desc: 'Now serving customers across India with offices in Delhi NCR, Jabalpur, Nagpur & Indore.' },
];

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&h=800&w=1920"
            alt="Modern interior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 to-stone-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              About One Click Enterprises
            </h1>
            <p className="mt-6 text-lg text-stone-300 leading-relaxed">
              A leading distributor of premium doors, tiles, sanitary ware, granite, and building
              materials — proudly serving customers across India from our offices in Delhi NCR,
              Jabalpur, Nagpur, and Indore.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2 mb-6">
              Building Trust, One Product at a Time
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                One Click Enterprises started as a building materials supplier in Jabalpur,
                Madhya Pradesh, with a simple mission: make premium quality construction and
                home improvement products easily accessible to everyone.
              </p>
              <p>
                Over the years, we have grown from a single outlet to a multi-city network with
                offices and warehouses in Delhi NCR, Jabalpur, Nagpur, and Indore. Our product
                range has expanded to include Hilton designer doors with 50+ models, ceramic and
                floor tiles, terracotta jali and bricks, sanitary ware, digital smart locks,
                granite, marble, decorative tiles, adhesives, kitchen sinks, and vanity units.
              </p>
              <p>
                We are proud to be associated with leading brands such as Hilton Doors, and offer
                products from trusted manufacturers including JK, Roff, Asian Paints, and Ultratech.
                Our commitment to quality and customer satisfaction has made us a preferred partner
                for homeowners, builders, architects, and contractors alike.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Building2, label: 'Branches', value: '4+' },
                { icon: Award, label: 'Product Types', value: '25+' },
                { icon: Truck, label: 'Cities Served', value: 'Pan-India' },
                { icon: Users, label: 'Happy Customers', value: '1000+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-xl font-bold text-stone-900">{stat.value}</div>
                  <div className="text-xs text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8134755/pexels-photo-8134755.jpeg?auto=compress&cs=tinysrgb&h=700&w=900"
              alt="Modern interior with wooden doors"
              className="rounded-2xl shadow-xl w-full"
            />
            <img
              src="https://images.pexels.com/photos/7166941/pexels-photo-7166941.jpeg?auto=compress&cs=tinysrgb&h=400&w=500"
              alt="Elegant hallway"
              className="rounded-2xl shadow-xl absolute -bottom-8 -left-8 w-2/5 hidden sm:block border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Our Mission</h3>
              <p className="text-stone-600 leading-relaxed">
                To provide our customers with the finest quality building materials and home
                improvement products at competitive prices, backed by excellent service and
                expert guidance — making construction and renovation simple and stress-free.
              </p>
            </div>
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="w-12 h-12 rounded-xl bg-stone-700 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Our Vision</h3>
              <p className="text-stone-600 leading-relaxed">
                To become India's most trusted and comprehensive building materials supplier,
                recognized for product quality, customer service, and innovation — expanding our
                reach to every corner of the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="text-3xl font-bold text-stone-900 mt-2">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 border border-stone-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">{value.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900">Our Journey</h2>
            <p className="text-stone-500 mt-3">From a single office to a pan-India presence.</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 sm:-translate-x-1/2" />
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-6 mb-8 ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100 sm:-translate-x-1/2 mt-2" />
                <div className="hidden sm:block sm:w-1/2" />
                <div className="pl-10 sm:pl-0 sm:w-1/2">
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-stone-200">
                    <span className="text-amber-600 text-xs font-semibold uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h3 className="font-semibold text-stone-800 mt-1">{m.title}</h3>
                    <p className="text-sm text-stone-500 mt-1">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations strip */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Where to Find Us</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            We have offices and warehouses across India to serve you better.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {officeLocations
              .filter((l) => l.branchType === 'Office')
              .map((loc, idx) => (
                <div key={idx} className="bg-stone-800 rounded-xl p-5">
                  <Building2 className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <h3 className="text-white font-semibold text-sm">{loc.city}</h3>
                  <p className="text-stone-400 text-xs mt-1">{loc.state}</p>
                </div>
              ))}
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors shadow-lg"
          >
            View All Locations
          </button>
        </div>
      </section>
    </div>
  );
}
