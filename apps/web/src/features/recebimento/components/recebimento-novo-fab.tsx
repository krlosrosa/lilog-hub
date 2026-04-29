'use client';

import Link from 'next/link';

import { cn } from '@lilo-wms/ui';

import { MaterialIcon } from './material-icon';

type RecebimentoNovoFabProps = {
  centro: string;
};

export const RecebimentoNovoFab = ({ centro }: RecebimentoNovoFabProps) => {
  const href = `/${centro}/recebimento/novo`;

  return (
    <Link
      href={href}
      className={cn(
        'pointer-events-auto fixed bottom-6 right-6 z-[100] flex aspect-square size-16 items-center justify-center rounded-full',
        'bg-[#002B5B] text-white shadow-[0_8px_24px_rgba(0,23,54,0.35)] ring-2 ring-white/90',
        'transition-transform hover:scale-105 hover:bg-[#001736] active:scale-95',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B5B]',
      )}
      aria-label="Novo recebimento"
      title="Novo recebimento"
    >
      <MaterialIcon name="add" className="text-[30px] leading-none text-white" />
    </Link>
  );
};
