import { RouterProvider, useRouter } from "@/components/Router";

import { Navbar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";

import { HomePage } from "@/pages/HomePage";

import { AboutPage } from "@/pages/AboutPage";

import { ProductsPage } from "@/pages/ProductsPage";

import { ContactPage } from "@/pages/ContactPage";

function PageRenderer() {
  const { path } = useRouter();

  if (path.startsWith("/about")) return <AboutPage />;

  if (path.startsWith("/products")) return <ProductsPage />;

  if (path.startsWith("/contact")) return <ContactPage />;

  return <HomePage />;
}

function App() {
  return (
    <RouterProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <PageRenderer />
        </main>

        <Footer />

        {/* Website Under Construction Watermark */}
        <div className="pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center select-none">
          <div className="-rotate-12 text-center opacity-20">
            <div className="border-4 border-red-600 px-10 py-5">
              <div className="text-5xl font-black tracking-widest text-red-600 sm:text-6xl">
                WEBSITE
              </div>

              <div className="text-4xl font-black tracking-widest text-red-600 sm:text-5xl">
                UNDER CONSTRUCTION
              </div>

              <div className="mt-2 text-base font-bold tracking-[0.3em] text-red-600 sm:text-lg">
                BROSAVO
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
