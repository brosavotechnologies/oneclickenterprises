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

        {/* Website Under Construction / Payment Pending Overlay */}
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/20">
          <div className="pointer-events-none select-none -rotate-12 text-center">
            <div className="border-4 border-red-600/70 px-10 py-6">
              <div className="text-5xl sm:text-6xl font-black tracking-widest text-red-600/75">
                WEBSITE
              </div>

              <div className="text-4xl sm:text-5xl font-black tracking-widest text-red-600/75">
                UNDER CONSTRUCTION
              </div>

              {/* <div className="mt-3 text-xl sm:text-2xl font-bold tracking-wider text-red-600/75">
                PAYMENT PENDING
              </div> */}

              <div className="mt-2 text-sm sm:text-base font-medium tracking-wide text-red-600/65">
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
