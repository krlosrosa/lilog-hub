export const AvariaReplicarSection = () => {
  return (
    <section aria-labelledby="label-replicar-avaria" className="flex flex-col gap-gutter">
      <div className="flex items-center justify-between gap-md rounded-lg border border-outline-variant bg-card p-md shadow-sm">
        <label
          id="label-replicar-avaria"
          htmlFor="replicar-damage"
          className="flex-1 cursor-pointer select-none font-sans text-body-md leading-snug text-foreground"
        >
          Replicar avaria para todos os itens já conferidos
        </label>
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="replicar-damage" type="checkbox" className="peer sr-only" aria-label="Replicar avaria para todos os itens já conferidos" />
          <span className="relative inline-flex h-6 w-11 shrink-0 rounded-full bg-surface-highest transition-colors after:absolute after:left-sm after:top-sm after:h-5 after:w-5 after:rounded-full after:border after:border-border after:bg-card after:transition-transform after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-5 peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring rtl:peer-checked:after:-translate-x-5" />
        </label>
      </div>
    </section>
  );
};
