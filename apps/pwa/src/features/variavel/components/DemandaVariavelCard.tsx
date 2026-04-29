import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';
import type { DemandaVariavel } from '@/features/variavel/types/types';

export interface DemandaVariavelCardProps {
  demanda: DemandaVariavel;
}

export const DemandaVariavelCard = ({ demanda }: DemandaVariavelCardProps) => {
  const navigate = useNavigate();

  const handleActionPress = () => {
    navigate('/variavel/itens');
  };

  const isEmAndamento = demanda.status === 'em_andamento';
  const badgeClass = isEmAndamento
    ? 'border border-primary-container bg-primary-container text-primary'
    : 'border border-border bg-surface-highest text-muted-foreground';

  const formattedItems = String(demanda.totalItems).padStart(2, '0');

  const itemsCountClass = isEmAndamento ? 'text-primary' : 'text-foreground';

  return (
    <article
      className="relative flex flex-col gap-md overflow-hidden rounded-lg border border-border bg-card p-md shadow-sm transition-colors hover:border-primary-container"
      aria-labelledby={`demanda-${demanda.id}-title`}
    >
      <div className="absolute right-0 top-0 p-sm">
        <span className={`rounded-full px-sm py-xs font-label text-label-sm ${badgeClass}`}>
          {isEmAndamento ? 'Em Andamento' : 'Pendente'}
        </span>
      </div>

      <div className="flex flex-col gap-xs">
        <span className="font-label text-label-sm text-muted-foreground">ID DA DEMANDA</span>
        <span id={`demanda-${demanda.id}-title`} className="font-sans text-headline-md text-foreground">
          {demanda.id}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-md rounded bg-surface-low p-sm">
        <div className="flex flex-col gap-xs">
          <span className="flex items-center gap-xs font-label text-label-sm text-muted-foreground">
            <Icon name="calendar_today" className="text-sm" aria-hidden />
            DATA
          </span>
          <span className="font-sans text-body-md font-semibold text-foreground">{demanda.date}</span>
        </div>
        <div className="flex flex-col gap-xs">
          <span className="flex items-center gap-xs font-label text-label-sm text-muted-foreground">
            <Icon name="inventory_2" className="text-sm" aria-hidden />
            CAIXAS
          </span>
          <span className="font-sans text-body-md font-semibold text-foreground">
            {demanda.caixas} Unidades
          </span>
        </div>
      </div>

      <div className="mt-sm flex items-center justify-between">
        <div className="flex flex-col gap-xs">
          <span className="font-label text-label-sm text-muted-foreground">ITENS NA LISTA</span>
          <span className={`font-sans text-headline-md ${itemsCountClass}`}>{formattedItems}</span>
        </div>
        {isEmAndamento ? (
          <button
            type="button"
            onClick={handleActionPress}
            className="flex min-h-btn items-center gap-sm rounded-lg bg-primary px-lg font-sans text-body-md font-bold text-primary-foreground shadow-md transition-transform active:scale-95"
            aria-label={`Retomar demanda ${demanda.id}`}
          >
            Retomar
            <Icon name="arrow_forward" className="text-xl" aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleActionPress}
            className="flex min-h-btn items-center gap-sm rounded-lg border-2 border-primary bg-transparent px-lg font-sans text-body-md font-bold text-primary transition-transform hover:bg-accent active:scale-95"
            aria-label={`Iniciar demanda ${demanda.id}`}
          >
            Iniciar
            <Icon name="play_arrow" className="text-xl" aria-hidden />
          </button>
        )}
      </div>
    </article>
  );
};
