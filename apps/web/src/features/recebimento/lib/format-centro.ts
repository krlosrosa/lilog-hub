/**
 * Formata o segmento `[centro]` da URL para exibição legível.
 * Ex.: `sao-paulo-01` → "Sao Paulo 01"
 */
export const formatCentroLabel = (centro: string): string => {
  const decoded = decodeURIComponent(centro).trim();
  if (!decoded) {
    return '—';
  }

  return decoded
    .split(/[-_/]/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join(' ');
};
