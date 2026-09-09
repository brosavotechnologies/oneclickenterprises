import { useState } from "react";
import { Menu, X, DoorOpen } from "lucide-react";
import { useRouter } from "@/components/Router";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
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
      {" "}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {" "}
          {/* Logo */}{" "}
          <button
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-2 group"
          >
            {" "}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              {" "}
              <DoorOpen className="w-5 h-5 text-white" />{" "}
            </div>{" "}
            <div className="text-left">
              {" "}
              <span className="block text-white font-bold text-sm sm:text-lg leading-tight tracking-wide">
                {" "}
                One Click Enterprises{" "}
              </span>{" "}
              <span className="block text-amber-400 text-[10px] sm:text-xs leading-tight">
                {" "}
                Doors · Tiles · Sanitary · More{" "}
              </span>{" "}
            </div>{" "}
          </button>{" "}
          {/* Desktop nav */}{" "}
          <div className="hidden md:flex items-center gap-1">
            {" "}
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "text-amber-400 bg-stone-800" : "text-stone-300 hover:text-white hover:bg-stone-800/60"}`}
              >
                {" "}
                {link.label}{" "}
              </button>
            ))}{" "}
            {/* Get a Quote */}{" "}
            <button
              onClick={() => handleNavigate("/contact")}
              className="ml-2 px-5 py-2 rounded-md text-sm font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors shadow-md"
            >
              {" "}
              Get a Quote{" "}
            </button>{" "}
          </div>{" "}
          {/* Mobile toggle */}{" "}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-stone-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {" "}
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}{" "}
          </button>{" "}
        </div>{" "}
        {/* Mobile menu */}{" "}
        {mobileOpen && (
          <div className="md:hidden border-t border-stone-700/50 py-4 space-y-1">
            {" "}
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "text-amber-400 bg-stone-800" : "text-stone-300 hover:text-white hover:bg-stone-800/60"}`}
              >
                {" "}
                {link.label}{" "}
              </button>
            ))}{" "}
            {/* Get a Quote */}{" "}
            <button
              onClick={() => handleNavigate("/contact")}
              className="block w-full text-left px-4 py-3 mt-2 rounded-md text-sm font-semibold bg-amber-500 text-stone-900 hover:bg-amber-400 transition-colors"
            >
              {" "}
              Get a Quote{" "}
            </button>{" "}
          </div>
        )}{" "}
      </nav>{" "}
    </header>
  );
}
