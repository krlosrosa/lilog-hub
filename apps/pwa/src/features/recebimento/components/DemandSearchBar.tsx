import { Icon } from '@/components/Icon';
import { cn, Input } from '@lilo-wms/ui';

export const DemandSearchBar = () => {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        aria-hidden="true"
      >
        <Icon name="search" className="text-xl text-muted-foreground" />
      </div>
      <Input
        readOnly
        placeholder="Filtrar demandas (ID, Placa...)"
        aria-label="Filtrar demandas por ID ou placa"
        className={cn(
          'h-12 min-h-touch rounded-lg border-0 bg-surface-low py-3 pl-11 pr-14 font-sans text-body-md shadow-sm',
          'placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary',
        )}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex min-h-touch min-w-touch items-center justify-center pr-3 text-primary active:scale-95"
        aria-label="Abrir leitor de código QR"
      >
        <Icon name="qr_code_scanner" className="text-xl" />
      </button>
    </div>
  );
};
