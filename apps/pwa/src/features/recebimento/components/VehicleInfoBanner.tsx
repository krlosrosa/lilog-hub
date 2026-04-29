export interface VehicleInfoBannerProps {
  plate: string;
  dockLabel: string;
}

export const VehicleInfoBanner = ({ plate, dockLabel }: VehicleInfoBannerProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-primary-container p-md shadow-lg">
      <div className="space-y-1">
        <p className="font-label text-label-sm font-bold uppercase tracking-wider text-primary-foreground/80">
          Placa do Veículo
        </p>
        <h3 className="font-sans text-xl font-extrabold tracking-tight text-primary-foreground">{plate}</h3>
      </div>
      <div className="h-10 w-px bg-primary-foreground/20" aria-hidden />
      <div className="space-y-1 text-right">
        <p className="font-label text-label-sm font-bold uppercase tracking-wider text-primary-foreground/80">
          Doca Designada
        </p>
        <h3 className="font-sans text-xl font-extrabold tracking-tight text-primary-foreground">{dockLabel}</h3>
      </div>
    </div>
  );
};
