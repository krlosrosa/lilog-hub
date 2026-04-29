import { cn } from '@lilo-wms/ui';

import { STATUS_CONFIG } from '../model/recebimento.constants';
import type { RecebimentoStatus } from '../model/recebimento.types';

type StatusBadgeProps = {
  status: RecebimentoStatus;
  className?: string;
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <span
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold leading-none uppercase tracking-[0.05em]',
        config.bg,
        config.text,
        className,
      )}
    >
      <span className={cn('size-1.5 shrink-0 rounded-full', config.dot)} aria-hidden />
      {config.label}
    </span>
  );
};
