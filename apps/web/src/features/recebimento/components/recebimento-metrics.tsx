'use client';

import { Card, CardContent, cn } from '@lilo-wms/ui';

import type { MetricItem } from '../model/recebimento.types';
import { MaterialIcon } from './material-icon';

type RecebimentoMetricsProps = {
  items: MetricItem[];
};

const METRIC_ICON_CLASS: Record<string, string> = {
  'total-hoje': 'text-[#001736]',
  'descargas-ativas': 'text-orange-500',
  'chegadas-pendentes': 'text-blue-500',
  'tempo-medio': 'text-[#001736]',
};

const hintClass = (hintType: MetricItem['hintType']) => {
  if (hintType === 'positive') {
    return 'text-emerald-600';
  }
  if (hintType === 'negative') {
    return 'text-red-600';
  }
  return 'text-slate-500';
};

export const RecebimentoMetrics = ({ items }: RecebimentoMetricsProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
      {items.map((metric) => (
        <Card key={metric.id} className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="mb-2 flex items-start justify-between">
              <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-500">{metric.label}</p>
              <MaterialIcon
                name={metric.icon}
                className={cn('text-[20px]', METRIC_ICON_CLASS[metric.id] ?? 'text-[#001736]')}
              />
            </div>
            <p className="text-[24px] font-semibold leading-8 tracking-[-0.02em] text-[#001736]">{metric.value}</p>
            {metric.progressPercent !== undefined ? (
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-orange-500 transition-all"
                  style={{ width: `${Math.min(100, Math.max(0, metric.progressPercent))}%` }}
                />
              </div>
            ) : null}
            {metric.hint && !metric.progressPercent ? (
              <p className={cn('mt-1 flex items-center gap-1 text-[11px] font-bold', hintClass(metric.hintType))}>
                {metric.hintIcon ? (
                  <MaterialIcon name={metric.hintIcon} className="text-[14px]" />
                ) : null}
                {!metric.hintIcon && metric.hintType === 'positive' ? (
                  <MaterialIcon name="trending_up" className="text-[14px]" />
                ) : null}
                {!metric.hintIcon && metric.hintType === 'negative' ? (
                  <MaterialIcon name="trending_down" className="text-[14px]" />
                ) : null}
                {metric.hint}
              </p>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
