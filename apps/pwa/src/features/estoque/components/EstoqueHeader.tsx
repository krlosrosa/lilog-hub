import { Link } from 'react-router-dom';

import { Icon } from '@/components/Icon';

export interface EstoqueHeaderProps {
  userAvatarSrc: string;
  userAvatarAlt: string;
}

export const EstoqueHeader = ({ userAvatarSrc, userAvatarAlt }: EstoqueHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card shadow-sm">
      <div className="flex h-16 w-full items-center justify-between px-margin-mobile">
        <div className="flex items-center gap-md">
          <Link
            to="/home"
            className="rounded-full p-2 text-primary transition-colors duration-200 hover:bg-accent active:opacity-70"
            aria-label="Voltar ao início"
          >
            <Icon name="arrow_back" className="text-xl" />
          </Link>
          <h1 className="font-sans text-lg font-bold text-foreground">Estoque</h1>
        </div>
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary-container text-primary-foreground">
          <img src={userAvatarSrc} alt={userAvatarAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </header>
  );
};
