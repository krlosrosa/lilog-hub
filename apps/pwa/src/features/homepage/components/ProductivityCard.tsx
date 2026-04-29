import { Icon } from '@/components/Icon';

import type { ProductivityStats } from '@/features/homepage/types/types';

export interface ProductivityCardProps {
  stats: ProductivityStats;
}

const CIRCUMFERENCE = 2 * Math.PI * 42;

export const ProductivityCard = ({ stats }: ProductivityCardProps) => {
  const dashOffset = CIRCUMFERENCE * (1 - stats.percentComplete / 100);

  return (
    <div className="rounded-xl border border-border bg-card p-lg shadow-sm">
      <div className="mb-md flex items-center justify-between">
        <div>
          <h3 className="font-sans text-headline-md text-foreground">Produtividade do Dia</h3>
          <p className="font-label text-label-md text-secondary-foreground">Meta individual diária</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
          <Icon name="trending_up" className="text-xl text-primary" />
        </div>
      </div>

      <div className="flex items-center gap-lg">
        <div className="relative h-24 w-24 shrink-0">
          <svg className="-rotate-90" viewBox="0 0 100 100" aria-hidden="true">
            <circle
              className="text-accent"
              cx="50"
              cy="50"
              fill="transparent"
              r="42"
              stroke="currentColor"
              strokeWidth="8"
            />
            <circle
              className="text-primary-container"
              cx="50"
              cy="50"
              fill="transparent"
              r="42"
              stroke="currentColor"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              strokeWidth="8"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-sans text-body-lg font-bold text-foreground">
              {stats.percentComplete}%
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-xs flex items-baseline gap-xs">
            <span className="font-sans text-headline-lg font-extrabold text-foreground">
              {stats.completedTasks}
            </span>
            <span className="font-sans text-body-md text-secondary-foreground">
              / {stats.totalTasks} Tarefas
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
            <div className="h-full w-4/5 rounded-full bg-primary-container" />
          </div>
          <p className="mt-sm flex items-center gap-xs font-label text-label-md font-semibold text-primary">
            <Icon name="bolt" className="text-sm" />
            {stats.helperMessage}
          </p>
        </div>
      </div>
    </div>
  );
};
