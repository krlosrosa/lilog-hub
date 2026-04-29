export const RecebimentoSkeleton = () => {
  return (
    <div className="min-h-dvh bg-background px-margin-mobile pb-8 pt-24 font-sans text-foreground" aria-busy="true" aria-label="Carregando lista de demandas">
      <div className="mb-4 h-12 animate-pulse rounded-lg bg-muted" />
      <div className="mb-6 h-12 animate-pulse rounded-lg bg-muted" />
      <div className="mb-4 flex items-center justify-between">
        <div className="h-7 w-40 animate-pulse rounded-md bg-muted" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="space-y-3">
        {[0, 1, 2].map((key) => (
          <div key={key} className="h-48 animate-pulse rounded-lg border border-border bg-card" />
        ))}
      </div>
    </div>
  );
};
