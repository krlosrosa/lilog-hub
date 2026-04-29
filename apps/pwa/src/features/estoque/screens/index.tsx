import { EstoqueActionCard } from '@/features/estoque/components/EstoqueActionCard';
import { EstoqueBottomNav } from '@/features/estoque/components/EstoqueBottomNav';
import { EstoqueHeader } from '@/features/estoque/components/EstoqueHeader';
import { RecentActivityItem } from '@/features/estoque/components/RecentActivityItem';
import type {
  EstoqueMenuActionCardData,
  RecentActivityItemData,
} from '@/features/estoque/types/types';

const STATIC_USER_AVATAR = {
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDCL3ELT2DlLuKbnjPRP9CofUN0B8i4uIsSgnrzCkaicPrMJcfgyXlmsedKkZCCmIH_4rAWQNlCdgSP25MkL1096av3JEePF7lA157Tel9pF3BO3VVVzTGt2hlq6a3SW1q-i8kb3TqvVoF04i6f7CEfLeKYheDppwvakA3OIZpjAu9niwmploCuK5nQE4VABLhQmDP9lsH8jn9i_uDhkBLSaM5OZBQmn7LMjjImsFeCKY6gyaChhWVIn8U7syvM-D-qaGUoR8UF_Mo',
  avatarAlt: 'Foto do responsável pelo estoque',
} as const;

const STATIC_MENU_ACTIONS: EstoqueMenuActionCardData[] = [
  {
    id: 'contagem',
    title: 'Contagem',
    subtitle: 'Realizar inventário de endereços e conferência de itens.',
    iconName: 'barcode_scanner',
    decorativeIconName: 'inventory',
    accent: 'primary',
  },
  {
    id: 'peso-variavel',
    title: 'Peso Variável',
    subtitle: 'Demandas, lista de itens e pesagem de caixas por SKU.',
    iconName: 'scale',
    decorativeIconName: 'category',
    accent: 'primary',
    to: '/variavel',
  },
  {
    id: 'recuperacao-avaria',
    title: 'Recuperação de Avaria',
    subtitle: 'Processar itens danificados e gerenciar fluxo de reparo.',
    iconName: 'healing',
    decorativeIconName: 'build_circle',
    accent: 'tertiary',
    to: '/recuperacao-avaria',
  },
  {
    id: 'armazenagem-itens-recuperados',
    title: 'Armazenagem',
    subtitle: 'Itens recuperados: armazenar e conferir destinação.',
    iconName: 'warehouse',
    decorativeIconName: 'inventory_2',
    accent: 'primary',
    to: '/estoque/armazenagem',
  },
];

const STATIC_RECENT_ACTIVITIES: RecentActivityItemData[] = [
  {
    id: 'recent-inventario',
    title: 'Inventário Anual – Setor A',
    subtitle: 'Concluído há 2 horas',
    accentBar: 'primary',
    trailingIconName: 'check_circle',
    trailingFilled: true,
  },
  {
    id: 'recent-avaria',
    title: 'Avaria Crítica #892',
    subtitle: 'Pendente de aprovação',
    accentBar: 'tertiary',
    trailingIconName: 'pending',
    trailingFilled: false,
  },
];

export const EstoqueMenuScreen = () => {
  return (
    <div className="min-h-dvh bg-background bg-[radial-gradient(at_0%_0%,rgba(93,63,211,0.05)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(93,63,211,0.05)_0px,transparent_50%)] font-sans text-foreground">
      <EstoqueHeader userAvatarAlt={STATIC_USER_AVATAR.avatarAlt} userAvatarSrc={STATIC_USER_AVATAR.avatarUrl} />

      <main className="px-margin-mobile pb-32 pt-lg">
        <div className="mb-lg">
          <h2 className="mb-xs font-sans text-headline-lg font-bold text-foreground">Gestão de Inventário</h2>
          <p className="font-sans text-body-md text-muted-foreground">
            Selecione uma operação para iniciar o processamento de estoque.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter">
          {STATIC_MENU_ACTIONS.map((item) => (
            <EstoqueActionCard key={item.id} item={item} />
          ))}
        </div>

        <section className="mt-xl" aria-labelledby="estoque-atividades-recentes">
          <h3
            id="estoque-atividades-recentes"
            className="mb-md font-sans text-label-md font-medium uppercase tracking-wider text-muted-foreground"
          >
            Atividades Recentes
          </h3>
          <div className="space-y-sm">
            {STATIC_RECENT_ACTIVITIES.map((activity) => (
              <RecentActivityItem key={activity.id} item={activity} />
            ))}
          </div>
        </section>
      </main>

      <EstoqueBottomNav />
    </div>
  );
};
