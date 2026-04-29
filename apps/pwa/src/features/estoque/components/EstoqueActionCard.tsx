import { Link } from 'react-router-dom';

import { Icon } from '@/components/Icon';

import type { EstoqueMenuActionCardData } from '@/features/estoque/types/types';

export interface EstoqueActionCardProps {
  item: EstoqueMenuActionCardData;
}

const accentShellClassNames: Record<
  EstoqueMenuActionCardData['accent'],
  string
> = {
  primary: 'rounded-xl bg-primary-container/10 p-md text-primary-container',
  tertiary: 'rounded-xl bg-orange-50 p-md text-tertiary dark:bg-amber-950/40',
};

export const EstoqueActionCard = ({ item }: EstoqueActionCardProps) => {
  const accentClass = accentShellClassNames[item.accent];

  const inner = (
    <>
      <div className="flex items-start gap-md">
        <div className={`shrink-0 ${accentClass}`}>
          <Icon name={item.iconName} className="!text-4xl" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-xs font-sans text-headline-md font-semibold text-foreground">{item.title}</h3>
          <p className="font-sans text-body-md leading-tight text-muted-foreground">{item.subtitle}</p>
        </div>
        <div className="self-center">
          <Icon name="chevron_right" className="text-muted-foreground" />
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
        <Icon name={item.decorativeIconName} className="!text-[120px]" aria-hidden />
      </div>
    </>
  );

  const className =
    'group relative w-full overflow-hidden rounded-2xl border border-outline-variant/30 bg-card p-md text-left shadow-sm transition-all hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  if (item.to) {
    return (
      <Link to={item.to} className={`${className} block`} aria-label={`${item.title}: ${item.subtitle}`}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`${className} cursor-default`} role="group" aria-label={`${item.title}: ${item.subtitle}`}>
      {inner}
    </div>
  );
};
