export const RecuperacaoSkeleton = () => {
  return (
    <div className="flex min-h-dvh flex-col gap-md bg-background px-margin-mobile pb-32 pt-20" aria-busy aria-label="Carregando">
      <div className="h-10 animate-pulse rounded-lg bg-muted" />
      <div className="grid grid-cols-2 gap-gutter">
        <div className="h-28 animate-pulse rounded-lg bg-muted" />
        <div className="h-28 animate-pulse rounded-lg bg-muted" />
      </div>
      <div className="h-6 w-48 animate-pulse rounded bg-muted" />
      <div className="flex flex-col gap-md">
        <div className="h-44 animate-pulse rounded-lg bg-muted" />
        <div className="h-44 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  );
};
