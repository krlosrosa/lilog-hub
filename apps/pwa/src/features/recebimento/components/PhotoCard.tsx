import { Icon } from '@/components/Icon';

import type { ChecklistPhoto } from '@/features/recebimento/types/types';

export interface PhotoCardProps {
  photo: ChecklistPhoto;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  const { icon, label, id } = photo;

  return (
    <div className="group flex items-center justify-between rounded-lg border border-border bg-card p-md shadow-sm transition-transform active:scale-[0.98]">
      <div className="flex items-center gap-md">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded border border-dashed border-outline bg-surface">
          <Icon name={icon} className="text-3xl text-secondary-foreground" />
        </div>
        <div>
          <p className="font-sans text-body-lg font-semibold text-foreground">{label}</p>
          <p className="font-label text-label-sm text-muted-foreground">Toque para capturar</p>
        </div>
      </div>
      <button
        type="button"
        className="shrink-0 rounded-md p-sm text-primary-container transition-transform active:scale-95"
        aria-label={`Capturar ${label}`}
        id={`capture-${id}`}
      >
        <Icon name="add_a_photo" className="text-2xl" />
      </button>
    </div>
  );
};
