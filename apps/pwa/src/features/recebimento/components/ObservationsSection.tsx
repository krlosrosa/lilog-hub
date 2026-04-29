export const ObservationsSection = () => {
  return (
    <section className="space-y-xs" aria-labelledby="label-observacoes-checklist">
      <label
        id="label-observacoes-checklist"
        htmlFor="observacoes-checklist"
        className="block px-xs font-label text-label-md font-bold uppercase tracking-wider text-muted-foreground"
      >
        Observações
      </label>
      <textarea
        id="observacoes-checklist"
        rows={6}
        placeholder="Descreva qualquer irregularidade encontrada..."
        className="w-full rounded-lg border border-outline-variant bg-card p-md font-sans text-body-md text-foreground outline-none ring-offset-background shadow-sm placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
        defaultValue=""
      />
    </section>
  );
};
