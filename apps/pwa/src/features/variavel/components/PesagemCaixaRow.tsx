import type { CaixaPesagem } from '@/features/variavel/types/types';

export interface PesagemCaixaRowProps {
  caixa: CaixaPesagem;
}

export const PesagemCaixaRow = ({ caixa }: PesagemCaixaRowProps) => {
  const isActive = caixa.rowState === 'active';

  const cardClass = [
    'relative overflow-hidden rounded-lg p-md',
    isActive ? 'border-2 border-primary bg-card shadow-md' : 'border border-border bg-card/80 shadow-sm',
    isActive ? '' : 'opacity-60',
  ].join(' ');

  return (
    <article className={cardClass} aria-labelledby={`pesagem-caixa-${caixa.id}-titulo`}>
      {isActive ? (
        <div className="absolute bottom-0 right-0 top-0 w-1 bg-primary" aria-hidden />
      ) : null}
      <div className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-md">
          <div
            className={
              isActive
                ? 'flex h-10 w-10 items-center justify-center rounded bg-primary-container font-sans text-body-md font-bold text-primary'
                : 'flex h-10 w-10 items-center justify-center rounded bg-surface font-sans text-body-md font-bold text-secondary-foreground'
            }
            aria-hidden
          >
            {caixa.numero}
          </div>
          <div>
            <p id={`pesagem-caixa-${caixa.id}-titulo`} className="font-sans text-body-md font-bold text-foreground">
              {caixa.label}
            </p>
            <p className="font-label text-label-sm text-muted-foreground">{caixa.subtitle}</p>
          </div>
        </div>
        <div className={['flex items-center gap-sm', isActive ? '' : 'opacity-80'].join(' ')}>
          {isActive ? (
            <>
              <div className="pointer-events-none flex h-12 w-24 items-center justify-end rounded bg-surface px-sm">
                <span className="font-sans text-headline-md text-primary tabular-nums opacity-50">
                  0.000
                </span>
              </div>
              <span className="font-sans text-body-md font-bold text-primary">kg</span>
            </>
          ) : (
            <>
              <div className="flex h-12 w-24 items-center justify-end rounded bg-surface-low px-sm">
                <span className="font-label text-label-md italic text-muted-foreground">---</span>
              </div>
              <span className="font-sans text-body-md text-muted-foreground">kg</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
