import { Icon } from '@/components/Icon';
import { ItemVariavelCard } from '@/features/variavel/components/ItemVariavelCard';
import { ItensVariavelHeader } from '@/features/variavel/components/ItensVariavelHeader';
import { ItensVariavelSummary } from '@/features/variavel/components/ItensVariavelSummary';
import { VariavelBottomNav } from '@/features/variavel/components/VariavelBottomNav';
import type { ItemVariavel } from '@/features/variavel/types/types';

const STATIC_ITENS: ItemVariavel[] = [
  {
    id: '1',
    sku: 'PROD-99012',
    produto: 'Peito de Frango Resfriado - Kg',
    lote: 'LT2024-X9',
    status: 'pendente',
    solicitado: '15 Cx',
  },
  {
    id: '2',
    sku: 'PROD-44810',
    produto: 'Filé Mignon Especial - Kg',
    lote: 'LT2024-B1',
    status: 'em_pesagem',
    solicitado: '08 Cx',
  },
  {
    id: '3',
    sku: 'PROD-11200',
    produto: 'Picanha Maturada Swift - Kg',
    lote: 'LT2023-V0',
    status: 'concluido',
    pesoFinal: '42.450 Kg',
  },
  {
    id: '4',
    sku: 'PROD-55011',
    produto: 'Lombo Suíno Temperado - Kg',
    lote: 'LT2024-C3',
    status: 'pendente',
    solicitado: '20 Cx',
  },
];

export const ListaItensVariavelScreen = () => {
  const handleFabPress = () => {
    /* tela estática — sem interação */
  };

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <ItensVariavelHeader demandaId="#WMS-88291" statusLabel="EM ANDAMENTO" />
      <main className="mx-auto flex max-w-4xl flex-col gap-lg px-margin-mobile pb-32 pt-20">
        <ItensVariavelSummary total={12} progressoPercent={25} />
        <section className="flex flex-col gap-md" aria-labelledby="lista-itens-variavel-heading">
          <h2 id="lista-itens-variavel-heading" className="sr-only">
            Itens da demanda de peso variável
          </h2>
          {STATIC_ITENS.map((item) => (
            <ItemVariavelCard key={item.id} item={item} />
          ))}
        </section>
      </main>

      <button
        type="button"
        onClick={handleFabPress}
        className="fixed bottom-24 right-margin-mobile z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform active:scale-95"
        aria-label="Abrir scanner global"
      >
        <Icon name="qr_code_scanner" className="text-2xl" filled />
      </button>

      <VariavelBottomNav />
    </div>
  );
};
