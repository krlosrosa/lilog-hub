import type { DetalheKpis as DetalheKpisData } from '../model/detalhe-recebimento.types';
import { MaterialIcon } from './material-icon';

type DetalheKpisProps = {
  kpis: DetalheKpisData;
};

export const DetalheKpisCards = ({ kpis }: DetalheKpisProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
      <div className="grid grid-cols-2 gap-2 md:col-span-8 md:grid-cols-5">
        <div className="flex flex-col justify-between border border-slate-300 bg-white p-2">
          <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-600">
            Total esperado
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-[#001736]">{kpis.totalEsperado.toLocaleString('pt-BR')}</span>
            <span className="text-[10px] uppercase text-slate-600">{kpis.unidade}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-slate-300 bg-white p-2">
          <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-slate-600">
            Total recebido
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-[#001736]">{kpis.totalRecebido.toLocaleString('pt-BR')}</span>
            <span className="text-[10px] uppercase text-slate-600">{kpis.unidade}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-l-4 border-l-red-600 border-slate-300 bg-white p-2">
          <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-red-600">Faltas</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-red-600">{kpis.faltas}</span>
            <span className="text-[10px] uppercase text-red-600">{kpis.unidade}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-l-4 border-l-amber-900 border-slate-300 bg-white p-2">
          <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-amber-950">Sobras</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-amber-950">{kpis.sobras}</span>
            <span className="text-[10px] uppercase text-amber-950">{kpis.unidade}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between border border-l-4 border-l-orange-600 border-slate-300 bg-white p-2">
          <span className="text-[11px] font-bold uppercase leading-4 tracking-[0.05em] text-orange-600">Avarias</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-semibold text-orange-600">{kpis.avarias}</span>
            <span className="text-[10px] uppercase text-orange-600">{kpis.unidade}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#002B5B] p-3 text-white md:col-span-4">
        <div className="flex items-center justify-around">
          <div className="text-center">
            <span className="mb-1 block text-[10px] font-bold opacity-70">Temp. baú</span>
            <div className="flex items-center justify-center gap-1">
              <MaterialIcon name="ac_unit" className="text-xs text-white" />
              <span className="text-xl font-semibold">{kpis.tempBauC}°C</span>
            </div>
          </div>
          <div className="h-8 w-px bg-white/20" aria-hidden />
          <div className="text-center">
            <span className="mb-1 block text-[10px] font-bold opacity-70">Temp. produto</span>
            <div className="flex items-center justify-center gap-1">
              <MaterialIcon name="thermostat" className="text-xs text-white" />
              <span className="text-xl font-semibold">{kpis.tempProdutoC}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
