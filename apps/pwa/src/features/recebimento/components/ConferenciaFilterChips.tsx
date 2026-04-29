const CHIP_LABELS = ['Não Conferidos', 'Conferidos', 'Divergências', 'Avarias'] as const;

export const ConferenciaFilterChips = () => {
  return (
    <div
      className="-mx-margin-mobile mb-lg flex gap-sm overflow-x-auto px-margin-mobile [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      role="group"
      aria-label="Filtros de conferência"
    >
      {CHIP_LABELS.map((label, index) => {
        const isActive = index === 0;
        return (
          <button
            key={label}
            type="button"
            className={
              isActive
                ? 'whitespace-nowrap rounded-full border-2 border-primary bg-primary px-6 py-2.5 font-label text-label-md font-extrabold text-primary-foreground shadow-md shadow-primary/20 transition-all active:scale-95'
                : 'whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 font-label text-label-md font-semibold text-muted-foreground transition-colors active:scale-95 active:bg-surface-low'
            }
            aria-pressed={isActive}
            aria-label={`Filtrar: ${label}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
