import { Icon } from '@/components/Icon';
import { cn, Input, Label } from '@lilo-wms/ui';

export const ItensSearchBar = () => {
  return (
    <section className="relative flex flex-col gap-sm">
      <Label htmlFor="itens-busca-sku" className="sr-only">
        Buscar SKU ou descrição
      </Label>
      <div className="group relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center text-outline transition-colors group-focus-within:text-primary"
          aria-hidden="true"
        >
          <Icon name="search" className="text-xl" />
        </span>
        <Input
          id="itens-busca-sku"
          readOnly
          type="text"
          placeholder="Buscar SKU ou descrição..."
          aria-label="Buscar item por SKU ou descrição"
          className={cn(
            'h-12 min-h-touch w-full rounded-lg border border-outline-variant/50 bg-surface-low pr-4 pl-12 font-sans text-body-md shadow-sm outline-none',
            'placeholder:text-muted-foreground focus-visible:border-primary-container focus-visible:ring-2 focus-visible:ring-primary-container',
          )}
        />
      </div>
    </section>
  );
};
