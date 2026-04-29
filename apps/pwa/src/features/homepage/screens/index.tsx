import { ActionGrid } from '@/features/homepage/components/ActionGrid';
import { BottomNav } from '@/features/homepage/components/BottomNav';
import { HomeHeader } from '@/features/homepage/components/HomeHeader';
import { ProductivityCard } from '@/features/homepage/components/ProductivityCard';
import { WarehouseBanner } from '@/features/homepage/components/WarehouseBanner';
import type { HomeUser, ProductivityStats } from '@/features/homepage/types/types';

const STATIC_USER: HomeUser = {
  displayName: 'João Silva',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB1bHcew_OLjPWFlwrYonamLeQmYOOhyc07p3ZUnAZJ-AZxnq2s5IE5r10V-nfS7J7VDNEpF7S0psu9QbOFTJf1Gb6IswZGCACpsp6MC6ITy0-elNZw7syP8N5h7LMimj4BIUEsz5E_tFgV35Xi8MBkJ17ACl_eEEnUdrQWVBu4ZBpzmEvaTRwJehipflRknql1Q_CFJel4r8MtK5APLMzjCTOHrYL-Ptga3DzvKk5eq4xJwzTxuKBl1d2K7jqV91ZTn_Ua86WCOjo',
  avatarAlt: 'Foto de perfil do operador',
};

const STATIC_PRODUCTIVITY: ProductivityStats = {
  percentComplete: 80,
  completedTasks: 24,
  totalTasks: 30,
  helperMessage: 'Quase lá! Faltam 6.',
};

export const HomeScreen = () => {
  return (
    <div className="min-h-dvh bg-secondary font-sans text-body-md text-foreground">
      <HomeHeader user={STATIC_USER} />
      <main className="mx-auto max-w-lg px-margin-mobile pb-32 pt-lg">
        <div className="mb-lg">
          <h2 className="mb-xs font-sans text-headline-lg text-foreground">Terminal de Logística</h2>
          <p className="font-sans text-body-md text-secondary-foreground">
            Operação em tempo real • Unidade SP-01
          </p>
        </div>
        <ActionGrid />
        <ProductivityCard stats={STATIC_PRODUCTIVITY} />
        <WarehouseBanner />
      </main>
      <BottomNav />
    </div>
  );
};
