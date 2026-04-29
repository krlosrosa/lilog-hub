export type EstoqueActionAccent = 'primary' | 'tertiary';

export interface EstoqueMenuActionCardData {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  decorativeIconName: string;
  accent: EstoqueActionAccent;
  /** Rota interna quando o card navega (ex.: `/recuperacao-avaria`). */
  to?: string;
}

export type RecentActivityAccentBar = 'primary' | 'tertiary';

export interface RecentActivityItemData {
  id: string;
  title: string;
  subtitle: string;
  accentBar: RecentActivityAccentBar;
  trailingIconName: string;
  trailingFilled?: boolean;
}

export type ArmazenagemItemStatus = 'pendente' | 'prioridade';

export interface ArmazenagemItem {
  sku: string;
  descricao: string;
  status?: ArmazenagemItemStatus;
  caixas: number;
  unidades: number;
  enderecoAlvo: string;
  /** Visual hint when item has no status chip (Stitch: last card with opacity). */
  dimmed?: boolean;
}
