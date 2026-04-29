import { Icon } from '@/components/Icon';

export const VariavelSearchBar = () => {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-md top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden>
        <Icon name="search" className="text-xl" />
      </span>
      <input
        type="search"
        readOnly
        tabIndex={0}
        aria-readonly="true"
        placeholder="Buscar ID ou Produto..."
        className="w-full rounded-lg border border-border bg-card py-md pl-12 pr-md font-sans text-body-md text-foreground shadow-sm outline-none ring-offset-background transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      />
    </div>
  );
};
