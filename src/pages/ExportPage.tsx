import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Globe2,
  Factory,
  PackageCheck,
  Clock3,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  ClipboardCheck,
  Truck,
  Phone,
  Mail,
//   MapPin,
  Send,
  Boxes,
} from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
// import { officeLocations, supportInfo } from "@/data/locations";

const products = [
  "Tiles",
  "Granite",
  "Kota Stone",
  "Quartz Stone",
  "Breeze-Block",
  "Sanitary Ware",
  "Bathroom Fixtures & Fittings",
  "Steel Doors",
  "Smart Locks",
  "Decorative Items",
  "Other Products",
];

const exportBenefits = [
  {
    icon: Globe2,
    title: "Exporting Worldwide",
    description:
      "Supporting buyers across countries with multi-category building and interior products.",
  },
  {
    icon: Factory,
    title: "Registered Export Business",
    description:
      "Export enquiries and documentation support for international trade requirements.",
  },
  {
    icon: PackageCheck,
    title: "Export-Safe Packaging",
    description:
      "Packaging coordination to help protect products during handling and transportation.",
  },
  {
    icon: Clock3,
    title: "Responsive Support",
    description:
      "Get assistance with product specifications, pricing and order enquiries.",
  },
];

const orderSteps = [
  {
    number: "01",
    title: "Browse & Select",
    description:
      "Explore product categories and select the materials, sizes and finishes for your project.",
  },
  {
    number: "02",
    title: "Request a Quote",
    description:
      "Share your destination country, required quantity and product specifications.",
  },
  {
    number: "03",
    title: "Confirm Your Order",
    description:
      "Review product availability, quotation, packaging and shipping arrangements.",
  },
  {
    number: "04",
    title: "Dispatch & Delivery",
    description:
      "Coordinate order dispatch and applicable shipping documentation with our team.",
  },
];

const certifications = [
  "ISO Certified",
  "CE Marking",
  "Import-Export Certificate",
  "FIEO Certificate",
  "CAPEXIL Certificate",
];

const inputClass =
  "w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100";

export function ExportPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Netherlands",
    product: "",
    quantity: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "Hello One Click Enterprises! I have an export enquiry.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Destination Country: ${form.country}`,
      `Product Interest: ${form.product}`,
      `Required Quantity: ${form.quantity || "Not specified"}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/31683395481?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Breadcrumbs crumbs={[{ label: "Export Enquiries" }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-900 py-16 sm:py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-amber-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
              <Globe2 className="h-4 w-4" />
              Global Sourcing & Exports
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Global-Standard Building & Interior Products
            </h1>

            <p className="mt-5 text-xl font-semibold text-amber-400">
              Quality products. Global standards.
            </p>

            <p className="mt-5 leading-8 text-stone-300">
              We source and supply a complete range of premium building,
              construction and interior products for distributors, retailers,
              developers, contractors and project partners worldwide.
            </p>

            <p className="mt-4 leading-8 text-stone-300">
              From{" "}
              <strong className="text-white">
                tiles, granite, Kota Stone, quartz stone, breeze-block, sanitary
                ware, bathroom fixtures and fittings, steel doors and smart
                locks
              </strong>
              , we bring together products from trusted manufacturers, focusing
              on consistent quality, competitive pricing and dependable service.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3.5 font-semibold text-stone-900 shadow-md transition hover:bg-amber-400"
              >
                Get an Export Quote
                <ArrowRight className="h-5 w-5" />
              </a> */}

              <a
                href="#/products"
                className="inline-flex items-center gap-2 rounded-lg border border-stone-600 px-6 py-3.5 font-semibold text-white transition hover:border-amber-500 hover:text-amber-400"
              >
                Explore Products
              </a>
            </div>

            <p className="mt-7 text-sm font-medium leading-6 text-stone-400">
              One trusted partner. Multiple product categories. Global sourcing
              made simple.
            </p>
          </div>

          {/* Export highlights */}
          <div className="rounded-2xl border border-stone-700 bg-stone-800/80 p-6 shadow-2xl sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-stone-900">
                <Globe2 className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm text-stone-400">One sourcing partner</p>
                <h2 className="text-2xl font-bold text-white">
                  Built for Global Trade
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Boxes,
                  title: "Multiple Product Categories",
                  text: "Building, construction and interior products.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Quotation Assistance",
                  text: "Discuss specifications, quantities and pricing.",
                },
                {
                  icon: Truck,
                  title: "Shipping Coordination",
                  text: "Discuss packaging and destination requirements.",
                },
                {
                  icon: ShieldCheck,
                  title: "Documentation Support",
                  text: "Clarify applicable export documents for your order.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl border border-stone-700 bg-stone-900/50 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-400">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        id="export-products"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Our Product Range
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">
              Building & Interior Products
            </h2>
            <p className="mt-4 leading-7 text-stone-600">
              Explore our product categories and tell us what your business or
              project requires.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                key={product}
                // href="#export-enquiry"
                // onClick={() =>
                //   setForm((previous) => ({
                //     ...previous,
                //     product,
                //   }))
                // }
                className="group flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-stone-900">
                    <PackageCheck className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-stone-800">
                    {product}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-stone-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Export Benefits */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-900 sm:text-4xl">
              Your Partner for Export Enquiries
            </h2>
            <p className="mt-4 leading-7 text-stone-600">
              A multi-category sourcing approach with support throughout the
              product enquiry and order coordination process.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exportBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-stone-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h2 className="mt-4 text-3xl font-bold text-stone-900">
              Certifications & Export Credentials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-600">
              The following credentials are listed in our company information.
              Please confirm which apply before publishing them as verified
              business certifications.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-semibold text-stone-700"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-amber-600" />
                {certification}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="bg-stone-900 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
              Simple Process
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              How to Order from One Click Enterprises
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-400">
              From selecting your products to coordinating your order, start by
              sharing your requirements with our team.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {orderSteps.map((step, index) => (
              <article key={step.number} className="relative text-center">
                {index < orderSteps.length - 1 && (
                  <div className="absolute left-[60%] top-7 hidden h-px w-[80%] bg-stone-700 lg:block" />
                )}

                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/50 bg-stone-800 text-lg font-bold text-amber-400">
                  {step.number}
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#export-enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-stone-900 transition hover:bg-amber-400"
            >
              Start Your Enquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Export Enquiry Form */}
      <section
        id="export-enquiry"
        className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="pt-2">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
              Get Started
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
              Request an Export Quote or Enquiry
            </h2>
            <p className="mt-5 leading-8 text-stone-600">
              Tell us about your project, destination country and product
              requirements. Our team can then review your enquiry and discuss
              product options, pricing and availability.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Product recommendations based on your requirements",
                "Quotation discussions for requested quantities",
                "Assistance with product specifications",
                "Coordination of packaging and shipping enquiries",
                "Support for business and individual buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <p className="text-sm leading-6 text-stone-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Reuse existing project contact data */}
            <div className="mt-9 rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold">Contact Our Team - Customer Support</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                {/* {supportInfo.country} */}
                Netherlands
              </p>

              <a
                href="tel:+31683395481"
                className="mt-5 flex items-center gap-3 font-semibold text-amber-400 transition hover:text-amber-300"
              >
                <Phone className="h-5 w-5" />
                +31 6 83395481
              </a>

              <a
                href="mailto:oneclickenterprises80@gmail.com"
                className="mt-4 flex items-start gap-3 break-all text-sm text-stone-300 transition hover:text-amber-400"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                oneclickenterprises80@gmail.com
              </a>

              {/* <div className="mt-6 border-t border-stone-700 pt-5">
                <p className="mb-3 text-sm font-semibold text-stone-300">
                  Our offices
                </p>

                <div className="space-y-3">
                  {officeLocations
                    .filter((location) => location.branchType === "Office")
                    .map((location) => (
                      <div
                        key={`${location.city}-${location.state}`}
                        className="flex items-start gap-3"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <div>
                          <p className="text-sm font-semibold">
                            {location.city}
                          </p>
                          <p className="text-xs text-stone-400">
                            {location.state}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div> */}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-stone-900">
              Send Us Your Requirements
            </h3>
            <p className="mt-2 text-sm leading-6 text-stone-500">
              Complete the form to prepare an export enquiry email.
            </p>

            {submitted && (
              <div
                role="status"
                className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
              >
                Your email application should open with the enquiry details.
                Please send the email to submit your enquiry.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="export-name"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="export-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="export-email"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="export-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="export-phone"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="export-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Country code and number"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="export-country"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Destination Country <span className="text-red-500">*</span>
                </label>
                <input
                  id="export-country"
                  name="country"
                  autoComplete="country-name"
                  required
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Where should the products be shipped?"
                />
              </div>

              <div>
                <label
                  htmlFor="export-product"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Product Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="export-product"
                  name="product"
                  required
                  value={form.product}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a product category</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                  <option value="Multiple Categories">
                    Multiple Categories
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="export-quantity"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Required Quantity
                </label>
                <input
                  id="export-quantity"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Quantity, units, square feet, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="export-message"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="export-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us about product sizes, specifications, quantity and delivery requirements..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-700"
              >
                <Send className="h-4 w-4" />
                Send Enquiry via WhatsApp
              </button>

              <p className="text-xs leading-5 text-stone-500">
                Your enquiry details will be prepared in WhatsApp. Please review
                and send the message to submit your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-stone-900 px-4 py-8 text-center text-sm text-stone-400">
        <p>
          One Click Enterprises — Your trusted partner for building and interior
          products.
        </p>
      </section>
    </div>
  );
}
