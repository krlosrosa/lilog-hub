import { Icon } from '@/components/Icon';

import type { RecentActivityItemData } from '@/features/estoque/types/types';

export interface RecentActivityItemProps {
  item: RecentActivityItemData;
}

const accentBarClassNames: Record<RecentActivityItemData['accentBar'], string> = {
  primary: 'bg-primary-container',
  tertiary: 'bg-tertiary-container',
};

const trailingTintClassNames: Record<RecentActivityItemData['accentBar'], string> = {
  primary: 'text-primary-container',
  tertiary: 'text-tertiary-container',
};

export const RecentActivityItem = ({ item }: RecentActivityItemProps) => {
  const barClass = accentBarClassNames[item.accentBar];
  const trailingTint = trailingTintClassNames[item.accentBar];

  return (
    <article
      className="flex items-center justify-between rounded-xl border border-white/40 bg-white/60 p-md backdrop-blur-sm dark:bg-card/60"
      aria-label={`${item.title}. ${item.subtitle}`}
    >
      <div className="flex items-center gap-md">
        <div className={`h-10 w-2 shrink-0 rounded-full ${barClass}`} aria-hidden />
        <div>
          <p className="font-sans text-body-md font-bold text-foreground">{item.title}</p>
          <p className="font-sans text-label-md text-muted-foreground">{item.subtitle}</p>
        </div>
      </div>
      <span className={`inline-flex ${trailingTint}`} aria-hidden>
        <Icon name={item.trailingIconName} filled={item.trailingFilled} className="text-2xl" />
      </span>
    </article>
  );
};
