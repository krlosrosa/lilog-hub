import { Icon } from '@/components/Icon';

import { AVARIA_MEDIA_PREVIEWS } from '@/features/recebimento/types/types';

export const AvariaMediaSection = () => {
  return (
    <section aria-labelledby="heading-avaria-midias" className="flex flex-col gap-gutter">
      <div className="flex items-center justify-between px-xs">
        <div className="flex items-center gap-sm">
          <Icon name="photo_camera" className="text-xl text-primary" />
          <h2 id="heading-avaria-midias" className="font-sans text-headline-md text-foreground">
            Mídias
          </h2>
        </div>
        <span className="font-label text-label-sm text-muted-foreground">Obrigatório 2+ fotos</span>
      </div>
      <div className="rounded-lg border border-outline-variant bg-card p-md shadow-sm">
        <div className="hide-scrollbar -mx-xs flex gap-md overflow-x-auto pb-sm">
          <button
            type="button"
            className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-xs rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 transition-colors hover:bg-primary/10 active:scale-95"
            aria-label="Adicionar foto da avaria"
          >
            <Icon name="add_a_photo" className="text-2xl text-primary" />
            <span className="font-label text-label-sm font-semibold uppercase tracking-wide text-primary">
              Adicionar
            </span>
          </button>
          {AVARIA_MEDIA_PREVIEWS.map((media) => (
            <div
              key={media.id}
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-outline-variant bg-muted shadow-sm"
            >
              <div
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-surface"
                role="img"
                aria-label={media.alt}
              >
                <Icon name="image" className="text-3xl text-muted-foreground" />
              </div>
              <button
                type="button"
                className="absolute right-xs top-xs flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-md transition-transform active:scale-95"
                aria-label={`Remover foto: ${media.alt}`}
              >
                <Icon name="close" className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
