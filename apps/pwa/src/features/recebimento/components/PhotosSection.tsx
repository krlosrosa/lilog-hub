import { Icon } from '@/components/Icon';

import { PhotoCard } from '@/features/recebimento/components/PhotoCard';
import { PHOTO_ITEMS } from '@/features/recebimento/types/types';

export const PhotosSection = () => {
  return (
    <section aria-labelledby="heading-fotos-obrigatorias" className="space-y-gutter">
      <div className="flex items-center gap-xs px-xs">
        <Icon name="photo_camera" className="text-xl text-primary-container" />
        <h3 id="heading-fotos-obrigatorias" className="text-label-md font-label font-bold uppercase tracking-wider text-muted-foreground">
          Fotos Obrigatórias
        </h3>
      </div>
      <div className="space-y-gutter">
        {PHOTO_ITEMS.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div>
        <button
          type="button"
          className="flex w-full flex-col items-center justify-center gap-xs rounded-lg border-2 border-dashed border-primary-container/40 py-md transition-colors hover:bg-accent active:scale-95"
          aria-label="Adicionar mais fotos ao check-list"
        >
          <Icon name="add_circle" className="text-4xl text-primary-container" filled />
          <span className="font-label text-label-md text-primary-container">Adicionar mais fotos</span>
        </button>
      </div>
    </section>
  );
};
