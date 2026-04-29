import { Icon } from '@/components/Icon';

import type { DemandaStatic } from '@/features/movimentacao/types/types';

export interface DemandaCardProps {
  item: DemandaStatic;
}

const barClass: Record<DemandaStatic['barAccent'], string> = {
  destructive: 'bg-destructive',
  primary: 'bg-primary',
  tertiary: 'bg-tertiary',
};

const titleIconToneClass: Record<DemandaStatic['titleIconTone'], string> = {
  destructive: 'text-destructive',
  primary: 'text-primary',
  tertiary: 'text-tertiary',
};

export const DemandaCard = ({ item }: DemandaCardProps) => {
  const ctaClassName =
    item.ctaStyle === 'container'
      ? 'bg-primary-container text-accent'
      : 'bg-primary text-primary-foreground';

  return (
    <div className="relative overflow-hidden rounded-lg border border-outline-variant bg-card p-md shadow-sm">
      <div
        className={`absolute bottom-0 left-0 top-0 w-1.5 ${barClass[item.barAccent]}`}
        aria-hidden
      />
      <div className="mb-md flex items-start justify-between pl-sm">
        <div className="flex items-center gap-sm">
          <Icon
            name={item.titleIconName}
            className={`text-xl ${titleIconToneClass[item.titleIconTone]}`}
          />
          <h3 className="font-sans text-body-lg font-bold text-foreground">{item.title}</h3>
        </div>
        <span className="font-label text-label-md text-muted-foreground">{item.demandaRef}</span>
      </div>
      <div className="mb-lg grid grid-cols-2 gap-md pl-sm">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm font-semibold uppercase text-secondary-foreground">
            Origem
          </span>
          <div className="flex items-center gap-xs">
            <Icon name={item.origemIconName} className="text-body-md text-secondary-foreground" />
            <span className="font-sans text-body-md font-bold text-foreground">{item.origemLabel}</span>
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm font-semibold uppercase text-secondary-foreground">
            Destino
          </span>
          <div className="flex items-center gap-xs">
            <Icon name={item.destinoIconName} className="text-body-md text-primary" />
            <span className="font-sans text-body-md font-bold text-foreground">{item.destinoLabel}</span>
          </div>
        </div>
      </div>
      <div
        role="presentation"
        className={`flex min-h-btn w-full items-center justify-center gap-sm rounded-lg font-bold transition-transform active:scale-95 ${ctaClassName}`}
      >
        <Icon name="forklift" filled className="text-body-lg" />
        Pegar Demanda
      </div>
    </div>
  );
};
