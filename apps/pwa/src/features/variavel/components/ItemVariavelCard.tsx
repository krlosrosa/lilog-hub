import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';
import type { ItemVariavel } from '@/features/variavel/types/types';

export interface ItemVariavelCardProps {
  item: ItemVariavel;
}

export const ItemVariavelCard = ({ item }: ItemVariavelCardProps) => {
  const navigate = useNavigate();

  const handlePrimaryPress = () => {
    navigate('/variavel/pesagem');
  };

  const isPendente = item.status === 'pendente';
  const isEmPesagem = item.status === 'em_pesagem';
  const isConcluido = item.status === 'concluido';

  const badgeClass = isPendente
    ? 'bg-surface text-muted-foreground'
    : isEmPesagem
      ? 'bg-tertiary-container text-tertiary-foreground'
      : 'bg-success text-success-foreground';

  const badgeLabel = isPendente ? 'Pendente' : isEmPesagem ? 'Em Pesagem' : 'Concluído';

  const containerClass = [
    'relative flex flex-col gap-md overflow-hidden rounded-lg border-2 bg-card p-md shadow-sm',
    isEmPesagem ? 'border-primary-container pl-md' : 'border-border',
    isConcluido ? 'opacity-80' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const skuTitleClass = isConcluido
    ? 'font-sans text-body-lg font-extrabold tracking-tight text-muted-foreground'
    : 'font-sans text-body-lg font-extrabold tracking-tight text-primary';

  const subtitleClass = 'font-sans text-body-md text-muted-foreground';

  const rightColLabel = isConcluido ? 'Peso Final' : 'Solicitado';
  const rightColValueClass = isConcluido
    ? 'font-sans text-body-lg font-bold text-primary'
    : 'font-sans text-body-lg font-bold text-foreground';

  const rightColValue = isConcluido ? item.pesoFinal ?? '—' : item.solicitado ?? '—';

  return (
    <article className={containerClass} aria-labelledby={`item-${item.id}-sku`}>
      {isEmPesagem ? (
        <div
          className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg bg-primary"
          aria-hidden
        />
      ) : null}

      <div className="flex items-start justify-between gap-sm">
        <div className="flex flex-col gap-xs">
          <span id={`item-${item.id}-sku`} className={skuTitleClass}>
            SKU: {item.sku}
          </span>
          <span className={subtitleClass}>{item.produto}</span>
        </div>
        <span className={`rounded-full px-sm py-xs font-label text-label-sm uppercase ${badgeClass}`}>
          {badgeLabel}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-md border-y border-surface-low py-sm">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm uppercase text-secondary-foreground">Lote</span>
          <span className="font-sans text-body-md font-bold text-foreground">{item.lote}</span>
        </div>
        <div className="flex flex-col items-end gap-xs">
          <span className="font-label text-label-sm uppercase text-secondary-foreground">
            {rightColLabel}
          </span>
          <span className={rightColValueClass}>{rightColValue}</span>
        </div>
      </div>

      {isPendente ? (
        <button
          type="button"
          onClick={handlePrimaryPress}
          className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary-container font-sans text-body-lg font-bold text-primary-foreground transition-transform active:scale-95"
          aria-label={`Iniciar pesagem para SKU ${item.sku}`}
        >
          <Icon name="scale" className="text-xl" />
          Iniciar Pesagem
        </button>
      ) : null}

      {isEmPesagem ? (
        <button
          type="button"
          onClick={handlePrimaryPress}
          className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary-container font-sans text-body-lg font-bold text-primary-foreground transition-transform active:scale-95"
          aria-label={`Continuar pesagem para SKU ${item.sku}`}
        >
          <Icon name="play_arrow" className="text-xl" />
          Continuar Pesagem
        </button>
      ) : null}

      {isConcluido ? (
        <button
          type="button"
          disabled
          className="flex min-h-btn w-full cursor-not-allowed items-center justify-center gap-sm rounded-lg bg-surface font-sans text-body-lg font-bold text-muted-foreground"
          aria-label={`Pesagem finalizada para SKU ${item.sku}`}
        >
          <Icon name="check_circle" className="text-xl" filled />
          Pesagem Finalizada
        </button>
      ) : null}
    </article>
  );
};
