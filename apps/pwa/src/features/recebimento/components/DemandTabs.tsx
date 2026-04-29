import type { KeyboardEvent } from 'react';

import type { DemandTab } from '@/features/recebimento/types/types';

export interface DemandTabsProps {
  activeTab: DemandTab;
  onTabChange: (tab: DemandTab) => void;
}

export const DemandTabs = ({ activeTab, onTabChange }: DemandTabsProps) => {
  const baseTabClass =
    'flex-1 rounded-md py-2 font-sans text-sm transition-colors active:scale-[0.98]';

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    onTabChange(activeTab === 'em_aberto' ? 'pendentes' : 'em_aberto');
  };

  return (
    <div
      className="flex rounded-lg bg-surface-low p-1"
      role="tablist"
      aria-label="Filtro de demandas"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        role="tab"
        id="tab-em-aberto"
        aria-selected={activeTab === 'em_aberto'}
        aria-controls="panel-demandas"
        tabIndex={activeTab === 'em_aberto' ? 0 : -1}
        className={`${baseTabClass} ${
          activeTab === 'em_aberto'
            ? 'bg-surface-lowest font-semibold text-primary shadow-sm'
            : 'font-medium text-muted-foreground'
        }`}
        onClick={() => onTabChange('em_aberto')}
      >
        Em aberto
      </button>
      <button
        type="button"
        role="tab"
        id="tab-pendentes"
        aria-selected={activeTab === 'pendentes'}
        aria-controls="panel-demandas"
        tabIndex={activeTab === 'pendentes' ? 0 : -1}
        className={`${baseTabClass} ${
          activeTab === 'pendentes'
            ? 'bg-surface-lowest font-semibold text-primary shadow-sm'
            : 'font-medium text-muted-foreground'
        }`}
        onClick={() => onTabChange('pendentes')}
      >
        Pendentes
      </button>
    </div>
  );
};
