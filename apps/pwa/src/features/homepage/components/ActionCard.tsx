import { Link } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import type { ModuleCardData } from '@/features/homepage/types/types';

export interface ActionCardProps {
  item: ModuleCardData;
}

const cardClassName =
  'flex flex-col gap-md rounded-xl border border-border bg-card p-md shadow-sm transition-transform outline-none active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export const ActionCard = ({ item }: ActionCardProps) => {
  const label = `${item.title}: ${item.subtitle}`;

  const inner = (
    <>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
        <Icon name={item.iconName} className="text-headline-lg text-primary" />
      </div>
      <div>
        <h3 className="font-sans text-headline-md text-foreground">{item.title}</h3>
        <p className="font-label text-label-md text-secondary-foreground">{item.subtitle}</p>
      </div>
    </>
  );

  if (item.to) {
    return (
      <Link to={item.to} className={cardClassName} aria-label={label}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={cardClassName} aria-label={label}>
      {inner}
    </div>
  );
};
