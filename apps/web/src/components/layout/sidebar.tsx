'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, type KeyboardEventHandler } from 'react';

import { cn } from '@lilo-wms/ui';

import { MaterialIcon } from '@/components/ui/material-icon';

const BRAND_NAVY = 'text-[#002B5B]';

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

type SidebarProps = {
  isCollapsed: boolean;
  onIsCollapsedChange: (collapsed: boolean) => void;
};

const useCentro = (): string | undefined => {
  const params = useParams();
  const raw = params?.centro;
  if (typeof raw === 'string') {
    return raw;
  }
  if (Array.isArray(raw) && raw[0] !== undefined) {
    return raw[0];
  }
  return undefined;
};

const CollapsedIconLink = ({ href, label, icon, isActive }: NavItem & { isActive: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex min-h-11 w-full min-w-0 items-center justify-center rounded-lg transition-colors',
        isActive
          ? 'bg-slate-50 font-bold text-[#002B5B] dark:bg-slate-800 dark:text-white'
          : 'text-slate-600 hover:bg-slate-50 hover:text-[#002B5B] dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
      )}
      aria-current={isActive ? 'page' : undefined}
      aria-label={label}
      title={label}
    >
      <MaterialIcon name={icon} className="text-[20px]" />
    </Link>
  );
};

const ExpandedNavLink = ({ href, label, icon, isActive }: NavItem & { isActive: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-lg py-2 pl-2 pr-4 transition-all duration-150 ease-in-out',
        isActive
          ? 'border-l-4 border-[#002B5B] bg-slate-50 font-bold text-[#002B5B] dark:bg-slate-800 dark:text-white'
          : 'text-slate-600 hover:bg-slate-50 hover:text-[#002B5B] dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <MaterialIcon name={icon} className="shrink-0 text-[20px]" />
      <span>{label}</span>
    </Link>
  );
};

export const Sidebar = ({ isCollapsed, onIsCollapsedChange }: SidebarProps) => {
  const centro = useCentro();
  const pathname = usePathname();

  const [recebimentoOpen, setRecebimentoOpen] = useState(true);
  const [estoqueOpen, setEstoqueOpen] = useState(true);

  if (centro === undefined) {
    return null;
  }

  const isRouteActive = (href: string) => {
    if (href === `/${centro}`) {
      return pathname === href;
    }
    // Rota-índice de recebimento: só a lista; subrotas têm itens próprios.
    if (href === `/${centro}/recebimento`) {
      return pathname === href || pathname === `${href}/`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const base = `/${centro}`;

  const recebimentoItems: NavItem[] = [
    { href: `${base}/recebimento`, label: 'Visão geral', icon: 'inbox' },
    { href: `${base}/recebimento/novo`, label: 'Nova Carga', icon: 'add_box' },
    { href: `${base}/recebimento/docas`, label: 'Gestão de Docas', icon: 'dock' },
    { href: `${base}/recebimento/historico`, label: 'Histórico', icon: 'history' },
  ];

  const estoqueItems: NavItem[] = [
    { href: `${base}/estoque`, label: 'Saldo Atual', icon: 'account_balance_wallet' },
    { href: `${base}/estoque/movimentacoes`, label: 'Movimentações', icon: 'swap_horiz' },
    { href: `${base}/estoque/inventario`, label: 'Inventário Cíclico', icon: 'event_repeat' },
  ];

  const topLevel: NavItem[] = [
    { href: base, label: 'Dashboard', icon: 'dashboard' },
  ];

  const afterSections: NavItem[] = [
    { href: `${base}/expedicao`, label: 'Expedição', icon: 'local_shipping' },
    { href: `${base}/relatorios`, label: 'Relatórios', icon: 'analytics' },
  ];

  const recebimentoSectionActive =
    pathname === `${base}/recebimento` ||
    pathname === `${base}/recebimento/` ||
    pathname.startsWith(`${base}/recebimento/`);
  const estoqueSectionActive = estoqueItems.some((i) => isRouteActive(i.href));

  const handleToggleRecebimento = () => {
    setRecebimentoOpen((v) => !v);
  };

  const handleToggleEstoque = () => {
    setEstoqueOpen((v) => !v);
  };

  const handleToggleCollapse = () => {
    onIsCollapsedChange(!isCollapsed);
  };

  const handleKeyDownMenuCollapse: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleCollapse();
    }
  };

  if (isCollapsed) {
    const collapsedAll: { item: NavItem; isActive: boolean }[] = [
      ...topLevel.map((item) => ({ item, isActive: isRouteActive(item.href) })),
      ...recebimentoItems.map((item) => ({ item, isActive: isRouteActive(item.href) })),
      ...estoqueItems.map((item) => ({ item, isActive: isRouteActive(item.href) })),
      ...afterSections.map((item) => ({ item, isActive: isRouteActive(item.href) })),
    ];

    return (
      <aside
        className="fixed left-0 top-0 z-30 flex h-screen w-16 flex-col border-r border-slate-200 bg-white text-[13px] font-medium transition-all duration-150 ease-in-out dark:border-slate-800 dark:bg-slate-900"
        aria-label="Navegação principal"
      >
        <div className="flex h-[72px] flex-col items-center justify-center border-b border-slate-50 px-1 py-4 dark:border-slate-800/50">
          <div
            className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground"
            title="WMS Terminal"
            aria-label="WMS Terminal"
          >
            <MaterialIcon name="warehouse" className="text-[20px] text-primary-foreground" />
          </div>
        </div>
        <nav className="flex flex-1 flex-col items-stretch gap-0.5 overflow-y-auto py-2">
          {collapsedAll.map(({ item, isActive }) => (
            <div key={item.href} className="px-1">
              <CollapsedIconLink {...item} isActive={isActive} />
            </div>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-1 border-t border-slate-50 p-2 dark:border-slate-800/50">
          <Link
            href={`${base}/configuracoes`}
            className="flex h-10 w-full min-w-0 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#002B5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
            aria-label="Configurações"
            title="Configurações"
            tabIndex={0}
          >
            <MaterialIcon name="settings" className="text-[20px]" />
          </Link>
          <button
            type="button"
            onClick={handleToggleCollapse}
            onKeyDown={handleKeyDownMenuCollapse}
            className="flex h-10 w-full items-center justify-center rounded py-1 text-slate-400 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Expandir menu"
            title="Expandir menu"
            tabIndex={0}
          >
            <MaterialIcon name="chevron_right" className="text-[20px]" />
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="fixed left-0 top-0 z-30 flex h-screen w-64 flex-col border-r border-slate-200 bg-white text-[13px] font-medium transition-all duration-150 ease-in-out dark:border-slate-800 dark:bg-slate-900"
      aria-label="Navegação principal"
    >
      <div className="border-b border-slate-50 px-4 py-6 dark:border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground">
            <MaterialIcon name="warehouse" className="text-[20px] text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <p className={cn('font-bold uppercase tracking-tighter', BRAND_NAVY, 'dark:text-white')}>
              WMS Terminal
            </p>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">Warehouse Unit 01</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-1 flex-col space-y-1 overflow-y-auto py-4" aria-label="Módulos">
        <div className="px-2">
          {topLevel.map((item) => (
            <ExpandedNavLink
              key={item.href}
              {...item}
              isActive={isRouteActive(item.href)}
            />
          ))}
        </div>

        <div className="px-2 pt-2">
          <div className="rounded-md">
            <button
              type="button"
              onClick={handleToggleRecebimento}
              className="flex w-full min-h-9 items-center justify-between py-2 pl-2 pr-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-primary dark:text-slate-500"
              aria-expanded={recebimentoOpen}
              id="recebimento-section"
              tabIndex={0}
            >
              <span className="flex items-center gap-2">Recebimento</span>
              <MaterialIcon
                name="expand_more"
                className={cn(
                  'text-[16px] transition-transform duration-200',
                  recebimentoOpen && 'rotate-180',
                  recebimentoSectionActive && 'text-primary'
                )}
              />
            </button>
            {recebimentoOpen && (
              <div
                className="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-0 dark:border-slate-800"
                role="group"
                aria-labelledby="recebimento-section"
              >
                {recebimentoItems.map((item) => (
                  <ExpandedNavLink
                    key={item.href}
                    {...item}
                    isActive={isRouteActive(item.href)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-2 pt-2">
          <div className="rounded-md">
            <button
              type="button"
              onClick={handleToggleEstoque}
              className="flex w-full min-h-9 items-center justify-between py-2 pl-2 pr-4 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:text-primary dark:text-slate-500"
              aria-expanded={estoqueOpen}
              id="estoque-section"
              tabIndex={0}
            >
              <span className="flex items-center gap-2">Estoque</span>
              <MaterialIcon
                name="expand_more"
                className={cn(
                  'text-[16px] transition-transform duration-200',
                  estoqueOpen && 'rotate-180',
                  estoqueSectionActive && 'text-primary'
                )}
              />
            </button>
            {estoqueOpen && (
              <div
                className="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-0 dark:border-slate-800"
                role="group"
                aria-labelledby="estoque-section"
              >
                {estoqueItems.map((item) => (
                  <ExpandedNavLink
                    key={item.href}
                    {...item}
                    isActive={isRouteActive(item.href)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-1 px-2 pt-2">
          {afterSections.map((item) => (
            <ExpandedNavLink
              key={item.href}
              {...item}
              isActive={isRouteActive(item.href)}
            />
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-50 p-2 dark:border-slate-800/50">
        <Link
          href={`${base}/configuracoes`}
          className="flex min-h-10 items-center gap-3 rounded-lg py-2 pl-2 pr-4 text-slate-600 transition-all duration-150 ease-in-out hover:bg-slate-50 hover:text-[#002B5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
          tabIndex={0}
        >
          <span>
            <MaterialIcon name="settings" className="text-[20px]" />
          </span>
          <span>Configurações</span>
        </Link>
        <button
          type="button"
          onClick={handleToggleCollapse}
          onKeyDown={handleKeyDownMenuCollapse}
          className="mt-1 flex w-full min-h-10 items-center justify-between py-2 pl-2 pr-4 text-left text-[11px] font-bold uppercase tracking-tighter text-slate-400 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label="Recolher menu"
          tabIndex={0}
        >
          <span>Recolher menu</span>
          <MaterialIcon name="chevron_left" className="text-[20px]" />
        </button>
      </div>
    </aside>
  );
};
