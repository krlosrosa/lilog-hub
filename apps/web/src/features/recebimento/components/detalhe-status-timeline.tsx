import type { DetalheTimelineStep } from '../model/detalhe-recebimento.types';
import { MaterialIcon } from './material-icon';

type DetalheStatusTimelineProps = {
  steps: DetalheTimelineStep[];
};

export const DetalheStatusTimeline = ({ steps }: DetalheStatusTimelineProps) => {
  return (
    <div className="border border-slate-300 bg-white p-4 lg:sticky lg:top-16">
      <h3 className="mb-6 text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-600">
        Status do fluxo
      </h3>
      <div className="relative ml-2 space-y-8">
        <div className="absolute bottom-1 left-[11px] top-1 w-0.5 bg-slate-200" aria-hidden />
        <ol className="relative space-y-8">
          {steps.map((step) => {
            if (step.state === 'done') {
              return (
                <li key={step.id} className="relative flex gap-4">
                  <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#001736]">
                    <MaterialIcon name="check" className="text-xs text-white" decorative />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#001736]">{step.title}</p>
                    <p className="text-[11px] text-slate-600">{step.subtitle}</p>
                  </div>
                </li>
              );
            }
            if (step.state === 'current') {
              return (
                <li key={step.id} className="relative flex gap-4">
                  <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full border-2 border-[#001736] bg-white">
                    <span className="size-2 animate-pulse rounded-full bg-[#001736]" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#001736]">{step.title}</p>
                    <p className="text-[11px] text-slate-600">{step.subtitle}</p>
                  </div>
                </li>
              );
            }
            return (
              <li key={step.id} className="relative flex gap-4 opacity-40">
                <div className="z-10 size-6 shrink-0 rounded-full border-2 border-transparent bg-slate-200" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-slate-600">{step.title}</p>
                  <p className="text-[11px] text-slate-600">{step.subtitle}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
