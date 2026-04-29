import { Icon } from '@/components/Icon';

const DOCK_OPTIONS = [
  { value: '04', label: 'Doca 04 (Atual)' },
  { value: '01', label: 'Doca 01' },
  { value: '02', label: 'Doca 02' },
  { value: '03', label: 'Doca 03' },
  { value: '05', label: 'Doca 05' },
] as const;

export interface DockSelectorProps {
  /** Valor do `<select>` (ex.: `04` para Doca 04). Padrão `04`. */
  defaultDockValue?: string;
}

export const DockSelector = ({ defaultDockValue = '04' }: DockSelectorProps) => {
  return (
    <section
      className="rounded-lg border border-border bg-card p-md shadow-sm"
      aria-labelledby="heading-local-descarga"
    >
      <div className="mb-md flex items-center gap-xs">
        <Icon name="door_front" className="text-xl text-primary-container" />
        <h3 id="heading-local-descarga" className="text-label-md font-label font-bold uppercase tracking-wider text-muted-foreground">
          Local de Descarga
        </h3>
      </div>
      <div className="space-y-xs">
        <label htmlFor="confirmar-doca" className="block text-label-md font-label text-muted-foreground">
          Confirmar Doca
        </label>
        <div className="relative">
          <select
            id="confirmar-doca"
            defaultValue={defaultDockValue}
            className="w-full appearance-none rounded border border-outline-variant bg-surface-lowest px-md py-3 font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            aria-describedby="confirmar-doca-desc"
          >
            {DOCK_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <span id="confirmar-doca-desc" className="sr-only">
            Selecione a doca de descarga atual.
          </span>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-md" aria-hidden>
            <Icon name="expand_more" className="text-xl text-secondary-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};
