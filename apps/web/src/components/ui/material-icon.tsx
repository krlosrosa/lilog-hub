import { cn } from '@lilo-wms/ui';

type MaterialIconProps = {
  name: string;
  className?: string;
  /** When true, hide from assistive tech (decorative). */
  decorative?: boolean;
};

export const MaterialIcon = ({ name, className, decorative = true }: MaterialIconProps) => {
  return (
    <span
      className={cn(
        'material-symbols-outlined inline-flex items-center justify-center align-middle text-[20px] leading-none',
        className
      )}
      aria-hidden={decorative}
    >
      {name}
    </span>
  );
};
