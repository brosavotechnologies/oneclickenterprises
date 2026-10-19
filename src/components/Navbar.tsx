import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "@/components/Router";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Export", path: "/export" },
];

export function Navbar() {
  const { path, navigate } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  const isActive = (linkPath: string) => {
    if (linkPath === "/") return path === "/";
    return path.startsWith(linkPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-700/50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 gap-2">
          {/* Both company brands */}
          <div className="flex items-center gap-2 sm:gap-5 min-w-0">
            {/* One Click Enterprises logo */}
            <button
              onClick={() => handleNavigate("/")}
              className="flex items-center gap-1.5 sm:gap-2 shrink-0 group text-left"
              aria-label="Go to One Click Enterprises home"
            >
              <img
                src="/images/logo.png"
                alt="One Click Enterprises logo"
                className="w-9 h-9 sm:w-14 sm:h-14 rounded-full object-cover group-hover:scale-105 transition-transform"
              />

              <div className="text-left">
                <span className="block text-white font-bold text-[11px] sm:text-lg leading-tight tracking-wide">
                  One Click
                  <span className="hidden sm:inline"> Enterprises</span>
                  <span className="sm:hidden"> Ent.</span>
                </span>
                <span className="hidden sm:block text-amber-400 text-[10px] lg:text-xs leading-tight mt-1">
                  Tiles · Granite · Sanitary · Doors · More
                </span>
              </div>
            </button>

            {/* Divider between the two companies */}
            <div className="h-9 sm:h-12 border-l border-stone-600 shrink-0" />

            {/* Hilton logo */}
            <button
              onClick={() => handleNavigate("/products")}
              className="flex items-center gap-1.5 sm:gap-2 shrink-0 group text-left"
              aria-label="Explore Hilton products"
            >
              <img
                src="/images/hilton-logo.jpeg"
                alt="Hilton logo"
                className="w-9 h-9 sm:w-14 sm:h-14 rounded-full object-cover overflow-hidden group-hover:scale-105 transition-transform"
              />

              <img
                src="/images/hilton-logo-2.jpeg"
                alt="Hilton logo 2"
                className="w-9 h-9 sm:w-14 sm:h-14 rounded-full object-cover overflow-hidden group-hover:scale-105 transition-transform"
              />

              <div className="text-left">
                <span className="block text-white font-bold text-sm sm:text-lg leading-tight tracking-wider">
                  Hilton
                </span>
                <span className="hidden sm:block text-amber-400 text-[10px] lg:text-xs leading-tight mt-1">
                  Premium Steel Doors
                </span>
              </div>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1 shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`px-3 lg:px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-amber-400 bg-stone-800"
                    : "text-stone-300 hover:text-white hover:bg-stone-800/60"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Get a Quote */}
            <button
              onClick={() => handleNavigate("/contact")}
              className="ml-2 px-4 lg:px-5 py-2 rounded-md text-sm font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors shadow-md whitespace-nowrap"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden text-stone-300 hover:text-white p-2 shrink-0"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden border-t border-stone-700/50 py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-amber-400 bg-stone-800"
                    : "text-stone-300 hover:text-white hover:bg-stone-800/60"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Get a Quote */}
            <button
              onClick={() => handleNavigate("/contact")}
              className="block w-full text-left px-4 py-3 mt-2 rounded-md text-sm font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors"
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
