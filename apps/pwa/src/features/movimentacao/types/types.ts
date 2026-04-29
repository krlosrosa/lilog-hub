export type DemandaBarAccent = 'destructive' | 'primary' | 'tertiary';

export type DemandaCtaStyle = 'container' | 'solid';

export type QuickActionIconTone = 'primary' | 'secondary' | 'tertiary';

export interface QuickActionStatic {
  id: string;
  title: string;
  iconName: string;
  iconRingClass: string;
  iconTone: QuickActionIconTone;
}

export interface DemandaStatic {
  id: string;
  title: string;
  demandaRef: string;
  titleIconName: string;
  titleIconTone: 'destructive' | 'primary' | 'tertiary';
  barAccent: DemandaBarAccent;
  origemLabel: string;
  origemIconName: string;
  destinoLabel: string;
  destinoIconName: string;
  ctaStyle: DemandaCtaStyle;
}
