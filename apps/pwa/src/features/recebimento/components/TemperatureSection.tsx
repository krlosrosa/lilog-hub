import { Icon } from '@/components/Icon';

export const TemperatureSection = () => {
  return (
    <section
      className="rounded-lg border border-border bg-card p-md shadow-sm"
      aria-labelledby="heading-controle-termico"
    >
      <div className="mb-md flex items-center gap-xs">
        <Icon name="thermostat" className="text-xl text-primary-container" />
        <h3 id="heading-controle-termico" className="text-label-md font-label font-bold uppercase tracking-wider text-muted-foreground">
          Controle Térmico
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-gutter">
        <div className="space-y-xs">
          <label htmlFor="temp-bau" className="block text-label-md font-label text-muted-foreground">
            Baú (°C)
          </label>
          <input
            id="temp-bau"
            type="number"
            placeholder="0.0"
            className="w-full rounded border border-outline-variant bg-surface-lowest px-md py-3 font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            defaultValue=""
            tabIndex={0}
          />
        </div>
        <div className="space-y-xs">
          <label htmlFor="temp-produto" className="block text-label-md font-label text-muted-foreground">
            Produto (°C)
          </label>
          <input
            id="temp-produto"
            type="number"
            placeholder="0.0"
            className="w-full rounded border border-outline-variant bg-surface-lowest px-md py-3 font-sans text-body-md text-foreground outline-none ring-offset-background transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            defaultValue=""
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
};
