import { Icon } from '@/components/Icon';

export const MovimentacaoHeader = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-accent bg-card/90 px-md shadow-sm backdrop-blur-md">
      <div className="flex items-center gap-md">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-primary-container bg-accent">
          <Icon name="person" filled className="text-headline-lg text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="font-label text-label-sm font-semibold uppercase tracking-wide text-secondary-foreground">
            Bem-vindo
          </span>
          <span className="font-sans text-label-md font-bold text-foreground">Operador João Silva</span>
        </div>
      </div>
      <div className="flex items-center gap-sm">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
          role="presentation"
          aria-hidden
        >
          <Icon name="notifications" className="text-headline-lg text-primary" />
        </div>
        <div className="font-sans text-lg font-black tracking-tight text-primary">WMS</div>
      </div>
    </header>
  );
};
