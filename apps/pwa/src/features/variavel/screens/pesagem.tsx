import { useState } from 'react';

import { ConfirmarPesagemModal } from '@/features/variavel/components/ConfirmarPesagemModal';
import { PesagemCaixasList } from '@/features/variavel/components/PesagemCaixasList';
import { PesagemFooter } from '@/features/variavel/components/PesagemFooter';
import { PesagemHeader } from '@/features/variavel/components/PesagemHeader';
import { PesagemInstrucoes } from '@/features/variavel/components/PesagemInstrucoes';
import { PesagemSkuCard } from '@/features/variavel/components/PesagemSkuCard';
import type { CaixaPesagem } from '@/features/variavel/types/types';

const STATIC_CAIXAS: CaixaPesagem[] = [
  {
    id: '1',
    numero: 1,
    label: 'Caixa 01',
    subtitle: 'Aguardando peso...',
    rowState: 'active',
  },
  {
    id: '2',
    numero: 2,
    label: 'Caixa 02',
    subtitle: 'Pendente',
    rowState: 'pending',
  },
  {
    id: '3',
    numero: 3,
    label: 'Caixa 03',
    subtitle: 'Pendente',
    rowState: 'pending',
  },
  {
    id: '4',
    numero: 4,
    label: 'Caixa 04',
    subtitle: 'Pendente',
    rowState: 'pending',
  },
];

export const PesagemVariavelScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-background font-sans text-foreground">
      <PesagemHeader />
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-gutter px-margin-mobile pb-40 pt-20">
        <PesagemSkuCard
          sku="99283-BR"
          produto="Peito de Frango Resfriado"
          lote="LT-2023-08-15"
          solicitado="04 Caixas"
        />
        <PesagemInstrucoes />
        <PesagemCaixasList caixas={STATIC_CAIXAS} currentStep={1} totalSteps={4} />
      </main>
      <PesagemFooter
        pesoTotalLabel="0.000"
        progressPercent={0}
        onConfirmarPesagem={() => setIsModalOpen(true)}
      />
      <ConfirmarPesagemModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
