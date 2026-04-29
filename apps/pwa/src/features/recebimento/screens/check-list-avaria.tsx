import { Icon } from '@/components/Icon';

import { AvariaConfirmFooter } from '@/features/recebimento/components/AvariaConfirmFooter';
import { AvariaDetalhesSection } from '@/features/recebimento/components/AvariaDetalhesSection';
import { AvariaHeader } from '@/features/recebimento/components/AvariaHeader';
import { AvariaInfoSection } from '@/features/recebimento/components/AvariaInfoSection';
import { AvariaMediaSection } from '@/features/recebimento/components/AvariaMediaSection';
import { AvariaReplicarSection } from '@/features/recebimento/components/AvariaReplicarSection';

export const ChecklistAvariaScreen = () => {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <AvariaHeader />
      <main className="mx-auto max-w-md space-y-gutter px-margin-mobile pb-32 pt-20">
        <AvariaInfoSection />
        <AvariaDetalhesSection />
        <AvariaMediaSection />

        <section aria-labelledby="heading-avaria-obs" className="flex flex-col gap-gutter">
          <div className="flex items-center gap-sm px-xs">
            <Icon name="edit_note" className="text-xl text-primary" />
            <h2 id="heading-avaria-obs" className="font-sans text-headline-md text-foreground">
              Observações
            </h2>
          </div>
          <div className="rounded-lg border border-outline-variant bg-card p-md shadow-sm">
            <textarea
              id="avaria-observacoes"
              rows={4}
              placeholder="Descreva detalhes adicionais sobre o estado da carga ou o motivo da avaria..."
              className="w-full resize-none rounded-lg border border-outline-variant bg-surface p-md font-sans text-body-md text-foreground outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
              defaultValue=""
              aria-label="Observações sobre a avaria"
            />
          </div>
        </section>

        <AvariaReplicarSection />
      </main>
      <AvariaConfirmFooter />
    </div>
  );
};
