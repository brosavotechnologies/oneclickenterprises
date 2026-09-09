import { RouterProvider, useRouter } from '@/components/Router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ContactPage } from '@/pages/ContactPage';

function PageRenderer() {
  const { path } = useRouter();

  if (path.startsWith('/about')) return <AboutPage />;
  if (path.startsWith('/products')) return <ProductsPage />;
  if (path.startsWith('/contact')) return <ContactPage />;
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

        {/* BROSAVO Watermark */}
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none">
          <div className="rounded-full bg-stone-900/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 shadow-lg">
            <span className="text-[10px] sm:text-xs font-medium tracking-wide text-white/60">
              MADE BY{' '}
              <span className="font-bold text-amber-400/80">
                BROSAVO
              </span>
            </span>
          </div>
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
