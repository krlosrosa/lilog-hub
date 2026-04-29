import { Icon } from '@/components/Icon';
import { useNavigate } from 'react-router-dom';

import type { RecuperacaoDemanda } from '@/features/recuperacao-avaria/types/types';

export interface RecuperacaoCardProps {
  demanda: RecuperacaoDemanda;
}

export const RecuperacaoCard = ({ demanda }: RecuperacaoCardProps) => {
  const navigate = useNavigate();
  const formattedItems = demanda.totalItems.toString().padStart(2, '0');
  const isEmAndamento = demanda.status === 'em_andamento';
  const progressPct = demanda.progress ?? 0;

  const handlePrimaryAction = () => {
    navigate('/recuperacao-avaria/itens');
  };

  const cardShellClass = [
    'group flex flex-col gap-md rounded-lg border border-outline-variant bg-card p-md shadow-sm transition-[transform,box-shadow] hover:shadow-md active:scale-[0.98]',
    isEmAndamento ? 'border-l-4 border-l-primary-container pl-[calc(theme(spacing.md)-4px)]' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={cardShellClass}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-sans font-bold text-headline-md text-primary">#{demanda.id}</span>
          <span className="font-label text-label-md text-muted-foreground">{demanda.date}</span>
        </div>
        {isEmAndamento ? (
          <div className="flex items-center gap-xs rounded-full bg-accent px-3 py-1 font-label text-label-sm text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden />
            Em Andamento
          </div>
        ) : (
          <div className="flex items-center gap-xs rounded-full bg-surface-highest px-3 py-1 font-label text-label-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-foreground" aria-hidden />
            Pendente
          </div>
        )}
      </div>

      {isEmAndamento ? (
        <div className="flex flex-col gap-xs">
          <div className="flex items-center justify-between">
            <span className="font-label text-label-sm text-muted-foreground">Progresso da Recuperação</span>
            <span className="font-label text-label-sm font-bold text-primary">{progressPct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-surface" role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso da recuperação">
            <div
              className="h-full rounded-full bg-primary-container"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      ) : null}

      <div className="flex items-end justify-between">
        <div className="flex items-center gap-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Icon name={demanda.iconName} className="text-primary" aria-hidden />
          </div>
          <div className="flex flex-col">
            <span className="font-label text-label-sm uppercase tracking-wider text-muted-foreground">
              Itens Totais
            </span>
            <span className="font-sans font-bold text-headline-md text-foreground">{formattedItems}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePrimaryAction}
          className="flex min-h-touch items-center gap-sm rounded-lg bg-primary-container px-4 font-label text-label-md font-medium text-primary-foreground transition-colors hover:bg-primary active:scale-95"
          aria-label={isEmAndamento ? `Continuar demanda ${demanda.id}` : `Iniciar demanda ${demanda.id}`}
        >
          {isEmAndamento ? 'Continuar' : 'Iniciar'}
          {isEmAndamento ? (
            <Icon name="play_arrow" className="text-lg text-primary-foreground" filled />
          ) : (
            <Icon name="arrow_forward" className="text-lg text-primary-foreground" />
          )}
        </button>
      </div>
    </article>
  );
};
