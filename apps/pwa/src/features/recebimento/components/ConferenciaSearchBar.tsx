import { Icon } from '@/components/Icon';
import { cn, Input } from '@lilo-wms/ui';

export const ConferenciaSearchBar = () => {
  return (
    <div className="relative group">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
        aria-hidden="true"
      >
        <Icon
          name="search"
          className="text-xl text-muted-foreground transition-colors group-focus-within:text-primary"
        />
      </div>
      <Input
        readOnly
        placeholder="Buscar por SKU ou descrição..."
        aria-label="Buscar por SKU ou descrição"
        className={cn(
          'h-12 min-h-touch rounded-lg border border-border bg-card py-3 pl-11 pr-4 font-sans text-body-md shadow-sm',
          'placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/10',
        )}
      />
    </div>
  );
};
