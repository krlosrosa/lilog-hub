import { DemandasAbertoSection } from '@/features/movimentacao/components/DemandasAbertoSection';
import { FleetStatusHero } from '@/features/movimentacao/components/FleetStatusHero';
import { MovimentacaoBottomNav } from '@/features/movimentacao/components/MovimentacaoBottomNav';
import { MovimentacaoHeader } from '@/features/movimentacao/components/MovimentacaoHeader';
import { QuickActionsGrid } from '@/features/movimentacao/components/QuickActionsGrid';
import type { DemandaStatic, QuickActionStatic } from '@/features/movimentacao/types/types';

const STATIC_QUICK_ACTIONS: QuickActionStatic[] = [
  {
    id: 'reabastecimento',
    title: 'Reabastecimento',
    iconName: 'rebase_edit',
    iconRingClass: 'bg-accent',
    iconTone: 'primary',
  },
  {
    id: 'armazenagem',
    title: 'Armazenagem',
    iconName: 'inventory_2',
    iconRingClass: 'bg-secondary',
    iconTone: 'secondary',
  },
  {
    id: 'transferencia',
    title: 'Transferência',
    iconName: 'swap_horiz',
    iconRingClass: 'bg-muted',
    iconTone: 'tertiary',
  },
];

const STATIC_DEMANDS: DemandaStatic[] = [
  {
    id: 'd-9832',
    title: 'Abastecimento de Picking',
    demandaRef: '#9832',
    titleIconName: 'priority_high',
    titleIconTone: 'destructive',
    barAccent: 'destructive',
    origemLabel: 'W-12-A-04',
    origemIconName: 'location_on',
    destinoLabel: 'P-01-C-02',
    destinoIconName: 'near_me',
    ctaStyle: 'container',
  },
  {
    id: 'd-9841',
    title: 'Armazenar Recebimento',
    demandaRef: '#9841',
    titleIconName: 'download',
    titleIconTone: 'primary',
    barAccent: 'primary',
    origemLabel: 'DOCA-04',
    origemIconName: 'dock',
    destinoLabel: 'S-05-D-11',
    destinoIconName: 'grid_view',
    ctaStyle: 'solid',
  },
  {
    id: 'd-9845',
    title: 'Movimentação Interna',
    demandaRef: '#9845',
    titleIconName: 'swap_horiz',
    titleIconTone: 'tertiary',
    barAccent: 'tertiary',
    origemLabel: 'R-02-B-05',
    origemIconName: 'location_on',
    destinoLabel: 'R-08-F-22',
    destinoIconName: 'near_me',
    ctaStyle: 'solid',
  },
];

export const MovimentacaoMenuScreen = () => {
  return (
    <div className="min-h-dvh bg-background pb-24 font-sans text-body-md text-foreground">
      <MovimentacaoHeader />
      <main className="flex flex-col gap-xl px-margin-mobile py-lg">
        <FleetStatusHero />
        <QuickActionsGrid actions={STATIC_QUICK_ACTIONS} />
        <DemandasAbertoSection demands={STATIC_DEMANDS} urgentBadge="4 Urgentes" />
      </main>
      <MovimentacaoBottomNav />
    </div>
  );
};
