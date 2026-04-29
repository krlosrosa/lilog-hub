import { Icon } from '@/components/Icon';

import type { ArmazenagemItem } from '@/features/estoque/types/types';

export interface ArmazenagemItemCardProps {
  item: ArmazenagemItem;
  onConfirmar?: () => void;
}

const formatRecuperado = (caixas: number, unidades: number) => {
  const cxLabel = caixas === 1 ? 'Caixa' : 'Caixas';
  const unLabel = unidades === 1 ? 'Un.' : 'Un.';
  return `${caixas} ${cxLabel} / ${unidades} ${unLabel}`;
};

const renderStatusChip = (item: ArmazenagemItem) => {
  if (item.status === 'pendente') {
    return (
      <span className="flex shrink-0 items-center gap-xs rounded-full bg-tertiary-container px-3 py-1 font-label text-label-sm text-tertiary-foreground">
        <Icon name="inventory_2" className="text-sm" />
        Pendente
      </span>
    );
  }

  if (item.status === 'prioridade') {
    return (
      <span className="flex shrink-0 items-center gap-xs rounded-full bg-secondary px-3 py-1 font-label text-label-sm text-secondary-foreground">
        <Icon name="warning" className="text-sm" />
        Prioridade
      </span>
    );
  }

  return null;
};

export const ArmazenagemItemCard = ({ item, onConfirmar }: ArmazenagemItemCardProps) => {
  const chip = renderStatusChip(item);
  const cardClass = [
    'relative flex flex-col gap-md overflow-hidden rounded-lg border border-outline-variant/30 bg-card p-md shadow-sm',
    item.dimmed ? 'opacity-80' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardClass}>
      <div className="flex items-start justify-between gap-sm">
        <div className="min-w-0 flex-1">
          <span className="mb-xs block font-sans text-headline-md font-bold text-primary">{item.sku}</span>
          <h3 className="leading-tight font-sans text-body-md text-muted-foreground">{item.descricao}</h3>
        </div>
        {chip}
      </div>

      <div className="grid grid-cols-2 gap-gutter">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm uppercase tracking-wider text-outline">Recuperado</span>
          <div className="flex items-center gap-sm font-sans font-semibold text-foreground">
            <Icon name="package" className="text-primary" />
            <span>{formatRecuperado(item.caixas, item.unidades)}</span>
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm uppercase tracking-wider text-outline">Endereço Alvo</span>
          <div className="flex items-center gap-sm font-sans font-bold text-primary">
            <Icon name="location_on" />
            <span>{item.enderecoAlvo}</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary font-sans text-body-lg font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all active:scale-95"
        aria-label={`Confirmar armazenagem do item ${item.sku}`}
        onClick={onConfirmar}
      >
        <Icon name="check_circle" />
        Confirmar
      </button>
    </article>
  );
};
