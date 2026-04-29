import type { DemandStatus } from '@/features/recebimento/types/types';

export interface DemandStatusBadgeProps {
  status: DemandStatus;
}

const statusLabels: Record<DemandStatus, string> = {
  aguardando: 'Aguardando',
  conferindo: 'Conferindo',
  transito: 'Trânsito',
};

export const DemandStatusBadge = ({ status }: DemandStatusBadgeProps) => {
  if (status === 'aguardando') {
    return (
      <div className="flex items-center gap-1 rounded-full bg-tertiary-container px-2 py-0.5 text-tertiary-foreground">
        <span className="size-1.5 rounded-full bg-tertiary" aria-hidden="true" />
        <span className="font-label text-label-sm uppercase">{statusLabels[status]}</span>
      </div>
    );
  }
  if (status === 'conferindo') {
    return (
      <div className="flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-accent-foreground">
        <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
        <span className="font-label text-label-sm uppercase">{statusLabels[status]}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 rounded-full bg-surface px-2 py-0.5 text-muted-foreground">
      <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground" aria-hidden="true" />
      <span className="font-label text-label-sm uppercase">{statusLabels[status]}</span>
    </div>
  );
};
