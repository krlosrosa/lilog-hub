import { ActionCard } from '@/features/homepage/components/ActionCard';
import type { ModuleCardData } from '@/features/homepage/types/types';

const STATIC_MODULES: ModuleCardData[] = [
  {
    id: 'recebimento',
    iconName: 'package_2',
    title: 'Recebimento',
    subtitle: '5 pendentes',
    to: '/recebimento',
  },
  {
    id: 'estoque',
    iconName: 'warehouse',
    title: 'Estoque',
    subtitle: 'Setor Geral',
    to: '/estoque',
  },
  {
    id: 'devolucao',
    iconName: 'assignment_return',
    title: 'Devolução',
    subtitle: '2 pendentes',
  },
  {
    id: 'movimentacao',
    iconName: 'forklift',
    title: 'Movimentação',
    subtitle: 'Em andamento',
    to: '/movimentacao',
  },
];

export const ActionGrid = () => {
  return (
    <div className="mb-lg grid grid-cols-2 gap-md" role="list">
      {STATIC_MODULES.map((item) => (
        <div key={item.id} role="listitem">
          <ActionCard item={item} />
        </div>
      ))}
    </div>
  );
};
