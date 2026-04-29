import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/Icon';

type NavKey = 'inventory' | 'recovery' | 'scanner' | 'profile';

const NAV_ITEMS: { id: NavKey; label: string; iconName: string; to?: string }[] = [
  { id: 'inventory', label: 'Inventory', iconName: 'inventory_2', to: '/estoque' },
  { id: 'recovery', label: 'Recovery', iconName: 'build_circle', to: '/recuperacao-avaria' },
  { id: 'scanner', label: 'Scanner', iconName: 'barcode_scanner' },
  { id: 'profile', label: 'Profile', iconName: 'person' },
];

const getIsActive = (id: NavKey, pathname: string): boolean => {
  if (id === 'inventory') {
    return pathname.startsWith('/estoque');
  }
  if (id === 'recovery') {
    return pathname.startsWith('/recuperacao-avaria');
  }
  return false;
};

export const RecuperacaoBottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-border bg-card px-md pb-safe pt-md shadow-lg"
      aria-label="Navegação inferior"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = getIsActive(item.id, location.pathname);

        const activeClassName =
          'flex min-h-touch min-w-touch flex-col items-center justify-center rounded-lg bg-accent px-md py-sm text-primary active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
        const idleClassName =
          'flex min-h-touch min-w-touch flex-col items-center justify-center px-md py-sm text-muted-foreground transition-transform duration-200 hover:text-primary active:scale-90 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

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
