import { Icon } from '@/components/Icon';

import type { HomeUser } from '@/features/homepage/types/types';

export interface HomeHeaderProps {
  user: HomeUser;
}

export const HomeHeader = ({ user }: HomeHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-border bg-secondary px-margin-mobile py-sm">
      <div className="flex items-center gap-md">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-card shadow-sm">
          <img
            src={user.avatarUrl}
            alt={user.avatarAlt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-label text-label-md font-normal text-secondary-foreground">
            Bem-vindo
          </span>
          <span className="font-sans text-headline-md leading-tight text-foreground">
            Olá, {user.displayName}
          </span>
        </div>
      </div>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
        aria-hidden="true"
      >
        <Icon name="notifications" className="text-xl text-primary-container" />
      </div>
    </header>
  );
};
