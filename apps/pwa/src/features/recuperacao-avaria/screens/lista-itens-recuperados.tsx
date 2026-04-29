import { ItemRecuperacaoCard } from '@/features/recuperacao-avaria/components/ItemRecuperacaoCard';
import { RecuperacaoBottomNav } from '@/features/recuperacao-avaria/components/RecuperacaoBottomNav';
import { ItensHeader } from '@/features/recuperacao-avaria/components/ItensHeader';
import { ItensSearchBar } from '@/features/recuperacao-avaria/components/ItensSearchBar';
import { ItensSummaryCard } from '@/features/recuperacao-avaria/components/ItensSummaryCard';
import type { ItemRecuperacao } from '@/features/recuperacao-avaria/types/types';

const STATIC_ITENS: ItemRecuperacao[] = [
  {
    sku: 'SKU-8829-XL',
    descricao: 'Suporte de Rack Industrial Reforçado (Tipo B)',
    status: 'pendente',
    quantidade: 120,
    unidade: 'unidades',
    caixas: 10,
  },
  {
    sku: 'SKU-4410-MD',
    descricao: 'Clipe de Fixação de Arnês de Segurança (Aço)',
    status: 'em_recuperacao',
    quantidade: 45,
    unidade: 'unidades',
    caixas: 3,
  },
  {
    sku: 'SKU-1022-LG',
    descricao: 'Protetor de Canto de Alumínio - G (Pacote c/ 4)',
    status: 'recuperado',
    quantidade: 200,
    unidade: 'unidades',
    caixas: 50,
  },
  {
    sku: 'SKU-5003-SM',
    descricao: 'Base para Scanner de Código de Barras Sem Fio',
    status: 'pendente',
    quantidade: 15,
    unidade: 'unidades',
    caixas: 1,
  },
];

const TOTAL_COUNT = 25;

export const ListaItensRecuperadosScreen = () => {
  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <ItensHeader />
      <main className="space-y-gutter px-margin-mobile pb-32 pt-md">
        <ItensSummaryCard
          demandId="REC-99201"
          dateLabel="24 Out, 2023"
          progressPercent={68}
          recoveredCount={17}
          totalCount={TOTAL_COUNT}
          pendingCount={8}
        />
        <ItensSearchBar />
        <div className="flex items-center justify-between pt-xs">
          <h2 className="font-sans text-headline-md text-foreground">Itens da Demanda</h2>
          <span className="rounded-full bg-surface px-3 py-1 font-label text-label-md text-muted-foreground">
            {TOTAL_COUNT} Total
          </span>
        </div>
        <section className="flex flex-col gap-gutter" aria-labelledby="itens-demanda-lista-heading">
          <span id="itens-demanda-lista-heading" className="sr-only">
            Lista de itens da demanda de recuperação
          </span>
          {STATIC_ITENS.map((item) => (
            <ItemRecuperacaoCard key={item.sku} item={item} />
          ))}
        </section>
      </main>
      <RecuperacaoBottomNav />
    </div>
  );
};
