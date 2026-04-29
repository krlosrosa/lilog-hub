import { Icon } from '@/components/Icon';

export const FleetStatusHero = () => {
  return (
    <section className="grid grid-cols-2 gap-gutter">
      <div className="relative col-span-2 overflow-hidden rounded-lg bg-primary-container p-lg shadow-sm">
        <div className="relative z-10">
          <h1 className="mb-xs font-sans text-headline-lg text-primary-foreground">Status da Frota</h1>
          <p className="font-sans text-body-md text-accent opacity-90">
            Empilhadeira #42 — Bateria 84%
          </p>
        </div>
        <div className="absolute -bottom-4 -right-4 opacity-10" aria-hidden>
          <Icon name="forklift" className="text-9xl text-primary-foreground" />
        </div>
      </div>
    </section>
  );
};
