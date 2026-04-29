import { Icon } from '@/components/Icon';

import type { RecuperacaoDamageHistory } from '@/features/recuperacao-avaria/types/types';

export interface DamageHistoryCardProps {
  damage: RecuperacaoDamageHistory;
}

export const DamageHistoryCard = ({ damage }: DamageHistoryCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="flex items-center gap-sm border-b border-border bg-surface-low p-md">
        <Icon name="history" className="text-xl text-primary" />
        <span className="font-sans text-headline-md font-semibold text-foreground">Histórico de Avarias</span>
      </div>
      <div className="flex flex-col gap-md p-md">
        <div className="grid grid-cols-3 gap-sm">
          <div className="flex min-w-0 flex-col">
            <span className="font-label text-label-sm text-muted-foreground">MOTIVO</span>
            <span className="font-sans text-body-md font-semibold text-foreground">{damage.motivo}</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-label text-label-sm text-muted-foreground">NATUREZA</span>
            <span className="font-sans text-body-md font-semibold text-foreground">{damage.natureza}</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-label text-label-sm text-muted-foreground">ORIGEM</span>
            <span className="font-sans text-body-md font-semibold text-foreground">{damage.origem}</span>
          </div>
        </div>
        <div className="flex flex-col gap-sm">
          <span className="font-label text-label-sm uppercase text-muted-foreground">Fotos Originais</span>
          <div className="-mx-margin-mobile flex gap-sm overflow-x-auto px-margin-mobile pb-1 md:mx-0 md:px-0">
            {damage.fotosOriginais.map((foto) => (
              <div
                key={foto.src}
                className="h-20 w-20 shrink-0 overflow-hidden rounded border border-border"
              >
                <img src={foto.src} alt={foto.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-xs rounded border border-border bg-surface-low p-sm">
          <span className="font-label text-label-sm text-muted-foreground">OBSERVAÇÕES</span>
          <p className="font-sans text-body-md italic leading-relaxed text-foreground">&ldquo;{damage.observacoes}&rdquo;</p>
        </div>
      </div>
    </div>
  );
};
