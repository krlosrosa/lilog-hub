import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import { DemandStatusBadge } from '@/features/recebimento/components/DemandStatusBadge';
import type { Demand } from '@/features/recebimento/types/types';

export interface DemandCardProps {
  demand: Demand;
}

export const DemandCard = ({ demand }: DemandCardProps) => {
  const navigate = useNavigate();
  const { id, status, tags, plate, dock, carrier, progress } = demand;

  const handleIniciarRecebimento = () => {
    navigate('/recebimento/check-list', {
      state: { plate, dock, demandId: id },
    });
  };

  const handleContinuarConferencia = () => {
    navigate('/recebimento/conferencia', {
      state: { plate, dock, demandId: id },
    });
  };

  return (
    <article className="rounded-lg border border-outline-variant/30 bg-surface-lowest p-3 shadow-sm transition-all active:scale-[0.99]">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-sans text-body-lg font-bold text-primary">#{id}</span>
          <DemandStatusBadge status={status} />
        </div>
        <div className="flex flex-wrap gap-1" aria-label="Etiquetas da demanda">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-outline-variant/30 bg-secondary px-1.5 py-0.5 font-label text-label-sm font-bold text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-x-2 gap-y-1">
        <div className="flex items-center gap-1.5">
          <Icon name="pin" className="text-base text-muted-foreground" />
          <p className="font-sans text-body-md font-medium text-foreground">{plate}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon name="dock" className="text-base text-muted-foreground" />
          <p className="font-sans text-body-md font-medium text-foreground">{dock}</p>
        </div>
        {carrier ? (
          <div className="col-span-2 flex items-center gap-1.5">
            <Icon name="local_shipping" className="shrink-0 text-base text-muted-foreground" />
            <p className="truncate font-sans text-body-md font-medium text-foreground">{carrier}</p>
          </div>
        ) : null}
      </div>
      {status === 'conferindo' && typeof progress === 'number' ? (
        <div className="mb-3">
          <div className="mb-1 flex justify-between font-label text-label-sm font-semibold text-muted-foreground">
            <span>PROGRESSO</span>
            <span>{progress}%</span>
          </div>
          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-surface-high"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : null}
      {status === 'aguardando' ? (
        <button
          type="button"
          className="flex min-h-btn w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 font-sans text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 active:scale-95"
          aria-label={`Iniciar recebimento da demanda ${id}`}
          onClick={handleIniciarRecebimento}
        >
          <Icon name="login" className="text-lg" />
          Iniciar Recebimento
        </button>
      ) : null}
      {status === 'conferindo' ? (
        <button
          type="button"
          className="flex min-h-btn w-full items-center justify-center gap-2 rounded-md bg-primary-container py-2.5 font-sans text-sm font-semibold text-primary-foreground active:scale-95"
          aria-label={`Continuar conferência da demanda ${id}`}
          onClick={handleContinuarConferencia}
        >
          <Icon name="play_arrow" className="text-lg" />
          Continuar
        </button>
      ) : null}
      {status === 'transito' ? (
        <button
          type="button"
          className="flex min-h-btn w-full items-center justify-center gap-2 rounded-md bg-surface-high py-2.5 font-sans text-sm font-semibold text-foreground active:scale-95"
          aria-label={`Ver detalhes da demanda ${id}`}
        >
          <Icon name="visibility" className="text-lg" />
          Ver Detalhes
        </button>
      ) : null}
    </article>
  );
};
