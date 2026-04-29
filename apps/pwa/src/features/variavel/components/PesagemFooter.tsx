import { Icon } from '@/components/Icon';

export interface PesagemFooterProps {
  pesoTotalLabel?: string;
  progressPercent?: number;
  onConfirmarPesagem?: () => void;
}

export const PesagemFooter = ({
  pesoTotalLabel = '0.000',
  progressPercent = 0,
  onConfirmarPesagem,
}: PesagemFooterProps) => {
  const progressWidthClass =
    progressPercent <= 0 ? 'w-0' : progressPercent >= 100 ? 'w-full' : 'w-1/4';

  return (
    <footer className="fixed bottom-0 left-0 z-40 w-full border-t border-border bg-card shadow-lg">
      <div className="mx-auto flex max-w-2xl flex-col gap-md px-margin-mobile py-md">
        <div className="flex items-end justify-between gap-md">
          <div>
            <p className="font-label text-label-sm uppercase text-muted-foreground">Peso Total Acumulado</p>
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-headline-lg text-foreground tabular-nums">{pesoTotalLabel}</span>
              <span className="font-sans text-body-lg font-bold text-secondary-foreground">kg</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-label text-label-sm text-muted-foreground">Progresso</p>
            <div className="flex items-center gap-sm">
              <div
                className="h-2 w-24 overflow-hidden rounded-full bg-surface"
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Progresso da pesagem ${progressPercent} por cento`}
              >
                <div
                  className={`h-full bg-primary transition-all duration-500 ${progressWidthClass}`}
                />
              </div>
              <span className="font-label text-label-md font-bold text-foreground">{progressPercent}%</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary py-md font-sans text-body-lg font-bold text-primary-foreground shadow-lg transition-transform active:scale-95"
          aria-label="Confirmar pesagem das caixas"
          onClick={onConfirmarPesagem}
        >
          <Icon name="check_circle" className="text-xl" />
          Confirmar Pesagem
        </button>
      </div>
    </footer>
  );
};
