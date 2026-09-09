import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Building2,
  Warehouse,
  Navigation,
  Send,
  CheckCircle,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { officeLocations, supportInfo } from '@/data/locations';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumbs crumbs={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <section className="bg-stone-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto">
            Get in touch with our team for product enquiries, bulk orders, or any assistance.
            We're here to help.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href={`tel:${supportInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Call Us</p>
                <p className="text-sm font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
                  {supportInfo.phone}
                </p>
              </div>
            </a>
            <a
              href="mailto:oneclickenterprisesofficial@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Email Us</p>
                <p className="text-sm font-semibold text-stone-800 group-hover:text-amber-600 transition-colors">
                  oneclickenterprisesofficial@gmail.com
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">Service Area</p>
                <p className="text-sm font-semibold text-stone-800">Pan-India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Send Us a Message</h2>
            <p className="text-stone-500 text-sm mb-6">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-sm text-green-800">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-stone-900 font-semibold hover:bg-amber-400 transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Support info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-6 sm:p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Customer Support</h2>
              <p className="text-stone-300 text-sm mb-4">
                {supportInfo.country}
              </p>
              <a
                href={`tel:${supportInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-lg font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                {supportInfo.phone}
              </a>
              <div className="mt-6 pt-6 border-t border-stone-700">
                <p className="text-stone-400 text-sm mb-3">Connect with us on social media:</p>
                <div className="flex gap-3">
                  {officeLocations.map((loc, idx) =>
                    loc.facebook ? (
                      <a
                        key={`fb-${idx}`}
                        href={loc.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-stone-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    ) : null
                  )}
                  {officeLocations.map((loc, idx) =>
                    loc.instagram ? (
                      <a
                        key={`ig-${idx}`}
                        href={loc.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-stone-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    ) : null
                  )}
                  {officeLocations.map((loc, idx) =>
                    loc.youtube ? (
                      <a
                        key={`yt-${idx}`}
                        href={loc.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-stone-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    ) : null
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200">
              <h2 className="text-xl font-bold text-stone-900 mb-4">Our Offices</h2>
              <div className="space-y-3">
                {officeLocations
                  .filter((l) => l.branchType === 'Office')
                  .map((loc, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-stone-800 text-sm">{loc.city}</p>
                        <p className="text-xs text-stone-500">{loc.state}</p>
                        {loc.phones.length > 0 && (
                          <p className="text-xs text-stone-600 mt-0.5">
                            {loc.phones[0]}
                            {loc.phones.length > 1 && ` (+${loc.phones.length - 1} more)`}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All locations */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-900">All Our Locations</h2>
            <p className="text-stone-500 mt-3">
              Visit any of our offices and warehouses across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeLocations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {loc.branchType === 'Warehouse' ? (
                      <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                        <Warehouse className="w-5 h-5 text-stone-600" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-amber-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-stone-800">{loc.city}</h3>
                      <span className="text-xs text-stone-400 uppercase tracking-wide">
                        {loc.branchType}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">{loc.address}</p>
                <p className="text-xs text-stone-400 mb-4">{loc.state}</p>

                {loc.phones.length > 0 && (
                  <div className="space-y-1 mb-4">
                    {loc.phones.map((phone, pidx) => (
                      <a
                        key={pidx}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 text-sm text-stone-600 hover:text-amber-600 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-amber-500" />
                        {phone}
                      </a>
                    ))}
                  </div>
                )}

                {loc.email && (
                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-2 text-sm text-stone-600 hover:text-amber-600 transition-colors mb-4"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    <span className="truncate">{loc.email}</span>
                  </a>
                )}

                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium hover:bg-stone-200 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View on Map
                  </a>
                  {loc.facebook && (
                    <a
                      href={loc.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-stone-100 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {loc.instagram && (
                    <a
                      href={loc.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-stone-100 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {loc.youtube && (
                    <a
                      href={loc.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-stone-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
