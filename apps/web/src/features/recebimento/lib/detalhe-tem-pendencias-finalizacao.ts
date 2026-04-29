import type { DetalheRecebimentoViewModel } from '../model/detalhe-recebimento.types';

export const detalheTemDivergenciaConferencia = (view: DetalheRecebimentoViewModel): boolean => {
  if (view.kpis.faltas > 0 || view.kpis.sobras > 0) {
    return true;
  }
  return view.conferencia.some((row) => row.diferenca !== null && row.diferenca !== 0);
};

export const detalheTemAvaria = (view: DetalheRecebimentoViewModel): boolean => {
  if (view.kpis.avarias > 0) {
    return true;
  }
  return view.avarias.some((row) => row.quantidade > 0);
};

export const detalheRequerMensagemDeposito = (view: DetalheRecebimentoViewModel): boolean => {
  return detalheTemDivergenciaConferencia(view) || detalheTemAvaria(view);
};
