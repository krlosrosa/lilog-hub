import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/Icon';

type NavKey = 'demandas' | 'estoque' | 'escanear' | 'perfil';

const NAV_ITEMS: { id: NavKey; label: string; iconName: string; to?: string }[] = [
  { id: 'demandas', label: 'Demandas', iconName: 'assignment', to: '/variavel' },
  { id: 'estoque', label: 'Estoque', iconName: 'inventory_2', to: '/estoque' },
  { id: 'escanear', label: 'Escanear', iconName: 'barcode_scanner' },
  { id: 'perfil', label: 'Perfil', iconName: 'person' },
];

const getIsActive = (id: NavKey, pathname: string): boolean => {
  if (id === 'demandas') {
    return pathname.startsWith('/variavel');
  }
  if (id === 'estoque') {
    return pathname.startsWith('/estoque');
  }
  return false;
};

export const VariavelBottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t border-border bg-card px-sm pb-safe pt-sm shadow-md"
      aria-label="Navegação inferior"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = getIsActive(item.id, location.pathname);

        const activeClassName =
          'flex min-h-touch min-w-touch flex-col items-center justify-center rounded-lg bg-accent px-md py-xs text-primary transition-transform duration-150 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
        const idleClassName =
          'flex min-h-touch min-w-touch flex-col items-center justify-center px-md py-xs text-muted-foreground transition-transform duration-150 hover:text-primary active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

        if (item.to) {
          return (
            <Link
              key={item.id}
              to={item.to}
              className={isActive ? activeClassName : idleClassName}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
            >
              <Icon name={item.iconName} className="text-xl" filled={isActive} />
              <span className="mt-xs font-sans text-label-md font-medium">{item.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            type="button"
            disabled
            className={`cursor-not-allowed opacity-60 ${idleClassName}`}
            aria-label={`${item.label} (em breve)`}
          >
            <Icon name={item.iconName} className="text-xl opacity-70" />
            <span className="mt-xs font-sans text-label-md font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
