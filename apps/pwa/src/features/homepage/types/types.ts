export interface HomeUser {
  displayName: string;
  avatarUrl: string;
  avatarAlt: string;
}

export interface ModuleCardData {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  /** Rota interna ao clicar no card (react-router). */
  to?: string;
}

export interface ProductivityStats {
  percentComplete: number;
  completedTasks: number;
  totalTasks: number;
  helperMessage: string;
}

export type NavItemId = 'home' | 'tasks' | 'inventory' | 'profile';

export interface NavItemData {
  id: NavItemId;
  label: string;
  iconName: string;
  isActive: boolean;
}
