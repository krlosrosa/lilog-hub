import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@/components/Icon';

type NavKey = 'dashboard' | 'demands' | 'inventory' | 'settings';

const NAV_ITEMS: { id: NavKey; label: string; iconName: string; to?: string }[] = [
  { id: 'dashboard', label: 'Dashboard', iconName: 'dashboard', to: '/home' },
  { id: 'demands', label: 'Demands', iconName: 'assignment', to: '/recebimento' },
  { id: 'inventory', label: 'Inventory', iconName: 'forklift', to: '/estoque' },
  { id: 'settings', label: 'Settings', iconName: 'settings' },
];

const getIsActive = (id: NavKey, pathname: string): boolean => {
  if (id === 'dashboard') {
    return pathname === '/home' || pathname === '/';
  }
  if (id === 'demands') {
    return pathname.startsWith('/recebimento');
  }
  if (id === 'inventory') {
    return pathname.startsWith('/estoque');
  }
  return false;
};

export const MovimentacaoBottomNav = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-xl border-t border-accent bg-card px-sm pb-safe pt-md shadow-lg"
      aria-label="Navegação inferior"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = getIsActive(item.id, location.pathname);

        const activeClassName =
          'flex flex-col items-center justify-center rounded-lg bg-accent px-md py-xs text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';
        const idleClassName =
          'flex flex-col items-center justify-center px-md py-xs text-muted-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:text-primary';

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
              <span className="font-sans text-label-sm font-bold uppercase tracking-wider">{item.label}</span>
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
            <span className="font-sans text-label-sm font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
