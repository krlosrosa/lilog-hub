type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export const Icon = ({ name, className = '', filled = false }: IconProps) => (
  <span
    className={`material-symbols-outlined select-none leading-none ${className}`}
    style={
      filled
        ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
        : { fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
    }
    aria-hidden="true"
  >
    {name}
  </span>
);
