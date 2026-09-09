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
      </div>
    </RouterProvider>
  );
}

export default App;
