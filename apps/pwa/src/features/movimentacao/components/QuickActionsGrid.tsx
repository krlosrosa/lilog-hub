import { Icon } from '@/components/Icon';

import type { QuickActionStatic } from '@/features/movimentacao/types/types';

export interface QuickActionsGridProps {
  actions: QuickActionStatic[];
}

const iconToneClass: Record<QuickActionStatic['iconTone'], string> = {
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  tertiary: 'text-tertiary',
};

export const QuickActionsGrid = ({ actions }: QuickActionsGridProps) => {
  return (
    <section aria-labelledby="movimentacao-acoes-rapidas">
      <h2 id="movimentacao-acoes-rapidas" className="mb-md font-sans text-headline-md text-foreground">
        Ações Rápidas
      </h2>
      <div className="grid grid-cols-3 gap-gutter">
        {actions.map((action) => (
          <div
            key={action.id}
            role="presentation"
            className="flex flex-col items-center gap-sm rounded-lg border-2 border-accent bg-card p-md shadow-sm"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${action.iconRingClass}`}
            >
              <Icon
                name={action.iconName}
                className={`text-headline-lg ${iconToneClass[action.iconTone]}`}
              />
            </div>
            <span className="text-center font-label text-label-sm text-foreground">{action.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
