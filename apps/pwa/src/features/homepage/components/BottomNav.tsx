import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/Icon';

const NAV_ITEMS: {
  id: 'home' | 'tasks' | 'inventory' | 'profile';
  label: string;
  iconName: string;
  to?: string;
}[] = [
  { id: 'home', label: 'Home', iconName: 'home', to: '/home' },
  { id: 'tasks', label: 'Tasks', iconName: 'assignment', to: '/recebimento' },
  { id: 'inventory', label: 'Inventory', iconName: 'inventory_2', to: '/estoque' },
  { id: 'profile', label: 'Profile', iconName: 'person' },
];

const getIsActive = (id: (typeof NAV_ITEMS)[number]['id'], pathname: string): boolean => {
  if (id === 'home') {
    return pathname === '/home' || pathname === '/';
  }
  if (id === 'tasks') {
    return pathname.startsWith('/recebimento');
  }
  if (id === 'inventory') {
    return pathname.startsWith('/estoque');
  }
  return false;
};

export const BottomNav = () => {
  const location = useLocation();

  return (
    <>
      <div
        className="fixed bottom-28 right-md z-40 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-container text-primary-foreground shadow-xl"
        role="img"
        aria-label="Scanner de código de barras"
      >
        <Icon name="barcode_scanner" className="text-headline-lg" />
      </div>

      <nav
        className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl border-t border-border bg-card px-md pb-lg pt-md shadow-lg"
        aria-label="Navegação principal"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = getIsActive(item.id, location.pathname);

          const activeClassName =
            'flex flex-col items-center justify-center rounded-lg bg-accent px-md py-sm text-primary-container outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
          const idleClassName =
            'flex flex-col items-center justify-center px-md py-sm text-muted-foreground transition-colors hover:text-primary-container outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

          if (item.to) {
            return (
              <Link
                key={item.id}
                to={item.to}
                className={isActive ? activeClassName : idleClassName}
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.label}
              >
                <Icon name={item.iconName} filled={isActive} className="text-xl" />
                <span className="mt-xs font-sans text-label-md font-semibold">{item.label}</span>
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
              <span className="mt-xs font-sans text-label-md font-semibold">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
