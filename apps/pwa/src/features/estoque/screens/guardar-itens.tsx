import { useState } from 'react';

import { ArmazenagemItemCard } from '@/features/estoque/components/ArmazenagemItemCard';
import { ConfirmarArmazenagemModal } from '@/features/estoque/components/ConfirmarArmazenagemModal';
import { EstoqueBottomNav } from '@/features/estoque/components/EstoqueBottomNav';
import { EstoqueHeader } from '@/features/estoque/components/EstoqueHeader';
import { ScannerBanner } from '@/features/estoque/components/ScannerBanner';
import type { ArmazenagemItem } from '@/features/estoque/types/types';

const STATIC_USER_AVATAR = {
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDCL3ELT2DlLuKbnjPRP9CofUN0B8i4uIsSgnrzCkaicPrMJcfgyXlmsedKkZCCmIH_4rAWQNlCdgSP25MkL1096av3JEePF7lA157Tel9pF3BO3VVVzTGt2hlq6a3SW1q-i8kb3TqvVoF04i6f7CEfLeKYheDppwvakA3OIZpjAu9niwmploCuK5nQE4VABLhQmDP9lsH8jn9i_uDhkBLSaM5OZBQmn7LMjjImsFeCKY6gyaChhWVIn8U7syvM-D-qaGUoR8UF_Mo',
  avatarAlt: 'Foto do responsável pelo estoque',
} as const;

const STATIC_ITENS: ArmazenagemItem[] = [
  {
    sku: 'SKU-9902-LG',
    descricao: 'Premium Ceramic Insulator Cluster',
    status: 'pendente',
    caixas: 3,
    unidades: 45,
    enderecoAlvo: 'A-12-04-B',
  },
  {
    sku: 'SKU-4410-X1',
    descricao: 'Terminal Block Assembly Kit',
    status: 'prioridade',
    caixas: 1,
    unidades: 12,
    enderecoAlvo: 'B-05-01-A',
  },
  {
    sku: 'SKU-7723-BT',
    descricao: 'Reinforced Brackets (Heavy Duty)',
    caixas: 10,
    unidades: 100,
    enderecoAlvo: 'C-22-09-F',
    dimmed: true,
  },
];

export const GuardarItensScreen = () => {
  const [selectedItem, setSelectedItem] = useState<ArmazenagemItem | null>(null);

  return (
    <div className="min-h-dvh bg-background pb-24 font-sans text-foreground">
      <EstoqueHeader userAvatarAlt={STATIC_USER_AVATAR.avatarAlt} userAvatarSrc={STATIC_USER_AVATAR.avatarUrl} />

      <ConfirmarArmazenagemModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      <main className="mx-auto max-w-2xl space-y-gutter px-margin-mobile py-lg">
        <div className="mb-xs flex flex-col gap-xs">
          <h2 className="font-sans text-headline-lg font-bold text-foreground">Armazenagem de Itens</h2>
          <p className="font-label text-label-md text-muted-foreground">
            Selecione o item para confirmar o destino final.
          </p>
        </div>

        <section className="grid grid-cols-1 gap-gutter" aria-labelledby="armazenagem-itens-heading">
          <span id="armazenagem-itens-heading" className="sr-only">
            Lista de itens para armazenagem
          </span>
          {STATIC_ITENS.map((item) => (
            <ArmazenagemItemCard
              key={item.sku}
              item={item}
              onConfirmar={() => setSelectedItem(item)}
            />
          ))}
        </section>

        <ScannerBanner />
      </main>

      <EstoqueBottomNav />
    </div>
  );
};
