import { Icon } from '@/components/Icon';
import { cn, Input, Label } from '@lilo-wms/ui';

export const RecuperacaoSearchBar = () => {
  return (
    <section className="flex flex-col gap-sm">
      <Label htmlFor="recuperacao-localizar-demanda" className="ml-1 font-label text-label-md text-muted-foreground">
        Localizar Demanda
      </Label>
      <div className="group relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center group-focus-within:text-primary text-muted-foreground transition-colors"
          aria-hidden="true"
        >
          <Icon name="search" className="text-xl" />
        </span>
        <Input
          id="recuperacao-localizar-demanda"
          readOnly
          type="text"
          placeholder="Procurar por ID (Ex: REC-99201)"
          aria-label="Procurar demanda por identificador"
          className={cn(
            'h-12 min-h-touch w-full rounded-lg border border-outline-variant bg-surface-lowest pr-4 pl-12 font-sans text-body-md shadow-sm outline-none',
            'placeholder:text-muted-foreground focus-visible:border-primary-container focus-visible:ring-2 focus-visible:ring-primary-container',
          )}
        />
      </div>
    </section>
  );
};
