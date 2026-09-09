import {
  DoorOpen,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useRouter } from "@/components/Router";
import { officeLocations, supportInfo } from "@/data/locations";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                <DoorOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                One Click Enterprises
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Your trusted partner for premium doors, tiles, sanitary ware,
              granite, and building materials across India.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={officeLocations[1].facebook || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={officeLocations[1].instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={officeLocations[1].youtube || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/products")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>Hilton Designer Doors</li>
              <li>Ceramic & Floor Tiles</li>
              <li>Terracotta Jali & Bricks</li>
              <li>Sanitary Ware</li>
              <li>Digital Smart Locks</li>
              <li>Granite & Marble</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${supportInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-amber-500" />
                <span>{supportInfo.phone}</span>
              </a>
              <a
                href={
                  officeLocations[4].email
                    ? `mailto:${officeLocations[4].email}`
                    : "#"
                }
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-amber-500" />
                <span>{officeLocations[4].email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-amber-500 mt-0.5" />
                <span className="text-stone-400">
                  Offices in Delhi NCR, Jabalpur, Nagpur & Indore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-xs text-stone-500">
          &copy; {new Date().getFullYear()} One Click Enterprises. All rights
          reserved. MADE BY{" "}
          <a
            href="https://www.brosavo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            BROSAVO
          </a>
        </div>
      </div>
    </footer>
  );
}
