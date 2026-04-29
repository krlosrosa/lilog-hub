import { Link } from 'react-router-dom';

import { Icon } from '@/components/Icon';

const navItemClass = {
  idle:
    'flex min-h-touch min-w-[44px] flex-col items-center justify-center rounded-xl px-3 py-1 text-muted-foreground transition-all duration-150 hover:text-primary active:scale-95',
  active:
    'flex min-h-touch min-w-[44px] flex-col items-center justify-center rounded-xl bg-accent px-3 py-1 text-primary-container transition-all duration-150 active:scale-95',
};

export const EstoqueBottomNav = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-2xl border-t border-border bg-card px-margin-mobile pb-safe pt-md shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
      aria-label="Navegação principal"
    >
      <Link
        to="/home"
        className={navItemClass.idle}
        aria-label="Ir para início"
      >
        <Icon name="home" className="text-xl" />
        <span className="font-sans text-[12px] font-semibold">Início</span>
      </Link>
      <div className={navItemClass.active} aria-current="page">
        <Icon name="inventory_2" className="text-xl" filled />
        <span className="font-sans text-[12px] font-semibold text-primary-container">Estoque</span>
      </div>
      <button
        type="button"
        className={navItemClass.idle}
        aria-label="Tarefas (em breve)"
        disabled
      >
        <Icon name="assignment" className="text-xl opacity-60" />
        <span className="font-sans text-[12px] font-semibold opacity-70">Tarefas</span>
      </button>
      <button
        type="button"
        className={navItemClass.idle}
        aria-label="Perfil (em breve)"
        disabled
      >
        <Icon name="person" className="text-xl opacity-60" />
        <span className="font-sans text-[12px] font-semibold opacity-70">Perfil</span>
      </button>
    </nav>
  );
};
