import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import { ChecklistHeader } from '@/features/recebimento/components/ChecklistHeader';
import { DockSelector } from '@/features/recebimento/components/DockSelector';
import { ObservationsSection } from '@/features/recebimento/components/ObservationsSection';
import { PhotosSection } from '@/features/recebimento/components/PhotosSection';
import { TemperatureSection } from '@/features/recebimento/components/TemperatureSection';
import { VehicleInfoBanner } from '@/features/recebimento/components/VehicleInfoBanner';
import type { ChecklistRouteState } from '@/features/recebimento/types/types';

const STATIC_PLATE = 'ABC-1234';
const STATIC_DOCK = 'Doca 04';

const DOCK_VALUES = new Set(['01', '02', '03', '04', '05']);

const isChecklistRouteState = (v: unknown): v is ChecklistRouteState =>
  typeof v === 'object' &&
  v !== null &&
  'plate' in v &&
  'dock' in v &&
  typeof (v as ChecklistRouteState).plate === 'string' &&
  typeof (v as ChecklistRouteState).dock === 'string' &&
  typeof (v as ChecklistRouteState).demandId === 'string';

/** Extrai código da doca a partir do texto da demanda (ex.: `Doca 04` → `04`). */
const resolveDefaultDockSelect = (dockLabel: string): string => {
  const match = dockLabel.match(/doca\s*0?(\d+)/i);
  if (!match) return '04';
  const padded = match[1].padStart(2, '0');
  return DOCK_VALUES.has(padded) ? padded : '04';
};

export const ChecklistScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const fromDemand = isChecklistRouteState(state) ? state : null;

  const plate = fromDemand?.plate ?? STATIC_PLATE;
  const dockLabel = fromDemand?.dock ?? STATIC_DOCK;
  const defaultDockSelect = resolveDefaultDockSelect(dockLabel);

  const handleConfirmChecklist = () => {
    navigate('/recebimento/conferencia');
  };

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <ChecklistHeader />
      <main className="mx-auto max-w-md space-y-gutter px-margin-mobile pb-12 pt-20">
        <VehicleInfoBanner dockLabel={dockLabel} plate={plate} />

        <div className="mb-lg">
          <h2 className="font-sans text-headline-lg text-foreground">Check-list de Chegada</h2>
          <p className="mt-xs font-sans text-body-md text-muted-foreground">
            Certifique-se de preencher todos os campos obrigatórios para liberar a descarga.
          </p>
        </div>

        <DockSelector defaultDockValue={defaultDockSelect} />
        <TemperatureSection />
        <PhotosSection />
        <ObservationsSection />

        <section className="pb-md pt-md">
          <button
            type="button"
            className="flex min-h-btn w-full items-center justify-center gap-sm rounded-lg bg-primary-container font-sans text-body-lg font-bold text-primary-foreground shadow-xl shadow-primary-container/40 transition-all active:scale-[0.98]"
            aria-label="Confirmar check-list de chegada"
            onClick={handleConfirmChecklist}
          >
            <Icon name="task_alt" className="text-2xl text-primary-foreground" />
            Confirmar Check-list
          </button>
        </section>
      </main>
      <div className="h-6 shrink-0" aria-hidden />
    </div>
  );
};
