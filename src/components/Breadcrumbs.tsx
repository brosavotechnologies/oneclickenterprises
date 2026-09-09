import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '@/components/Router';

interface Crumb {
  label: string;
  path?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-stone-500 hover:text-amber-600 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            {crumb.path ? (
              <button
                onClick={() => navigate(crumb.path!)}
                className="text-stone-500 hover:text-amber-600 transition-colors"
              >
                {crumb.label}
              </button>
            ) : (
              <span className="text-stone-800 font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
