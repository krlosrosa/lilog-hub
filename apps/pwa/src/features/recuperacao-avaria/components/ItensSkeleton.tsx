export const ItensSkeleton = () => {
  return (
    <div
      className="flex min-h-dvh flex-col gap-gutter bg-background px-margin-mobile pb-32 pt-md"
      aria-busy
      aria-label="Carregando itens da demanda"
    >
      <div className="h-16 w-full animate-pulse rounded-lg bg-muted" />
      <div className="h-40 animate-pulse rounded-lg bg-muted" />
      <div className="h-12 animate-pulse rounded-lg bg-muted" />
      <div className="h-7 w-56 animate-pulse rounded bg-muted" />
      <div className="flex flex-col gap-gutter">
        <div className="h-36 animate-pulse rounded-lg bg-muted" />
        <div className="h-36 animate-pulse rounded-lg bg-muted" />
        <div className="h-36 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  );
};
