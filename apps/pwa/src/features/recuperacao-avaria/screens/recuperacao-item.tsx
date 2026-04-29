import { DamageHistoryCard } from '@/features/recuperacao-avaria/components/DamageHistoryCard';
import { ItemAvariaInfo } from '@/features/recuperacao-avaria/components/ItemAvariaInfo';
import { RecuperacaoBottomNav } from '@/features/recuperacao-avaria/components/RecuperacaoBottomNav';
import { RecuperacaoInputSection } from '@/features/recuperacao-avaria/components/RecuperacaoInputSection';
import { RecuperacaoItemHeader } from '@/features/recuperacao-avaria/components/RecuperacaoItemHeader';
import type { RecuperacaoItemData } from '@/features/recuperacao-avaria/types/types';

const STATIC_ITEM: RecuperacaoItemData = {
  sku: 'WMS-LX-9902',
  statusBadge: 'Aguardando Recuperação',
  productName: 'Premium Ceramic Insulator Cluster',
  locationLine: 'Zona B-14 | Categoria Eletrônicos de Alto Valor',
  caixasAvariadas: 10,
  unidadesAvariadas: 120,
  damageHistory: {
    motivo: 'Crush Damage',
    natureza: 'Structural',
    origem: 'Inbound',
    fotosOriginais: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8zJnt_hDF_O2Nf9FQCJyuJxpccAcP4cJ65NQ61HqAM8LjIdWwkTor7xN_hfbwIUdi45ifa0IEXfF-41JH_u8ArK6_2c3SLVmihlejl3KnbQMd-iL-uBOJMoXnlnvgcwZhOO6mpPnHcI-6ywmA3qlWqVKVTY6rREuLiCobbTBRfWqqu3u2kMKLDtHB18gn-X0yK54a8D95FNz36e8-cxTxNJjQ3LIgQt4pIZ5m0xpiXNtV8q3Lf9MZ5vCqzmZXmFSCn9ov5zs19v8',
        alt: 'Close up of a crushed cardboard box edge showing damaged structural integrity in warehouse lighting',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmUTGFfvCYd08QAe7dnxKDGjhkCMFAH4ARhWXMygkVR6sjM37CGFM8GT6z2dLeth0egNi-M91Kvm-ddX4Ks0EqJFQR0cyHNakem22EazJ9Rv9sbPKiy8GVb482pDqt-Bv9O3ZLdhyHfuO6QsHVZablVzbbhBViO99rHvyhqJ4FORGoJa2RVsriqP4gXtz2KY545kLHfHHPNb5HEu1UIhjiL2dDvKruIh8K5p3_IlSrIVIUTiHvTnAh2HrP6nnZN_aZEKEAtD5pdnY',
        alt: 'Shattered ceramic components inside a shipping container with bubble wrap visible',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJHYXhflSyBEH7vaML915PHIw_vYB9KA6ybisPRaOYNYl6eMpsZ6dTJ0eSQaSxJGGsEGFusaFzT6C9PajQrKyjbwGc9nKlYJKrEX6C3TYh0lLrkdTOf_6wJ0EKB0awu0MJBbLZLj8vmspvHcmnIbbfm8pG6bbTEJ0H1Se-0YrUYjtEGz8x12F3Mx3LvTxLaqWM4taZu1MA9P4VpGFt9DwtgeTfrA_WY4elwtURRtPYBHcIEtNkwHN4RBaOJtB8ahJKYucPfG8aeAA',
        alt: 'Warehouse worker pointing to a rip in a heavy duty industrial shipping bag',
      },
    ],
    observacoes:
      'Outer carton was punctured by forklift during unloading. Immediate inspection suggested 40% loss of internal contents.',
  },
};

export const RecuperacaoItemScreen = () => {
  return (
    <div className="min-h-dvh bg-background pb-32 font-sans text-foreground">
      <RecuperacaoItemHeader />
      <main className="flex flex-col gap-lg px-margin-mobile pt-lg">
        <ItemAvariaInfo data={STATIC_ITEM} />
        <DamageHistoryCard damage={STATIC_ITEM.damageHistory} />
        <RecuperacaoInputSection />
      </main>
      <RecuperacaoBottomNav />
    </div>
  );
};
