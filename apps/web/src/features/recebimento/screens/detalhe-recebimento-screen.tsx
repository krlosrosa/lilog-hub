'use client';

import { Fragment, useMemo, useState, type KeyboardEvent } from 'react';

import { Button, cn } from '@lilo-wms/ui';

import { DetalheConferenciaTable } from '../components/detalhe-conferencia-table';
import { DetalheHeader } from '../components/detalhe-header';
import { DetalheKpisCards } from '../components/detalhe-kpis';
import { DetalheStatusTimeline } from '../components/detalhe-status-timeline';
import { FinalizarConferenciaModal } from '../components/finalizar-conferencia-modal';
import { MaterialIcon } from '../components/material-icon';
import {
  detalheRequerMensagemDeposito,
  detalheTemAvaria,
  detalheTemDivergenciaConferencia,
} from '../lib/detalhe-tem-pendencias-finalizacao';
import { buildDetalheRecebimentoView } from '../model/detalhe-recebimento.mock';
import type { DetalheAvariaRow } from '../model/detalhe-recebimento.types';

type DetalheRecebimentoScreenProps = {
  centro: string;
  id: string;
};

export const DetalheRecebimentoScreen = ({ centro, id }: DetalheRecebimentoScreenProps) => {
  const view = useMemo(() => buildDetalheRecebimentoView(id), [id]);
  const [expandedAvariaId, setExpandedAvariaId] = useState<string | null>(view.avarias[0]?.id ?? null);
  const [finalizarModalOpen, setFinalizarModalOpen] = useState(false);

  const temDivergencia = useMemo(() => detalheTemDivergenciaConferencia(view), [view]);
  const temAvaria = useMemo(() => detalheTemAvaria(view), [view]);
  const requerFluxoDeposito = useMemo(() => detalheRequerMensagemDeposito(view), [view]);

  const handleToggleAvaria = (row: DetalheAvariaRow) => {
    setExpandedAvariaId((prev) => (prev === row.id ? null : row.id));
  };

  const handleCapturarEvidenciaClick = () => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console -- mock
      console.log('capturar-evidencia');
    }
  };

  const handleScannerFabClick = () => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console -- mock
      console.log('barcode-scanner');
    }
  };

  const handleFinalizarConferenciaClick = () => {
    setFinalizarModalOpen(true);
  };

  const handleFinalizarModalClose = () => {
    setFinalizarModalOpen(false);
  };

  const handleFinalizarConfirmado = () => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console -- fluxo mock até existir API
      console.log('finalizar-conferencia-confirmado', {
        recebimentoId: view.recebimentoId,
        requerFluxoDeposito,
        temDivergencia,
        temAvaria,
      });
    }
  };

  return (
    <div className="min-h-dvh w-full bg-[#FAF8FF] p-3 text-slate-900 antialiased">
      <main className="mx-auto max-w-[1600px] space-y-3">
        <DetalheHeader
          centro={centro}
          recebimentoId={view.recebimentoId}
          statusLabel={view.statusLabel}
          status={view.status}
          placa={view.placa}
          horaInicio={view.horaInicio}
          docaLabel={view.docaLabel}
          onFinalizarConferenciaClick={handleFinalizarConferenciaClick}
        />

        <FinalizarConferenciaModal
          open={finalizarModalOpen}
          requerFluxoDeposito={requerFluxoDeposito}
          temDivergencia={temDivergencia}
          temAvaria={temAvaria}
          onClose={handleFinalizarModalClose}
          onConfirm={handleFinalizarConfirmado}
        />

        <div className="grid grid-cols-12 items-start gap-3">
          <div className="col-span-12 space-y-3 xl:col-span-9">
            <DetalheKpisCards kpis={view.kpis} />
            <DetalheConferenciaTable rows={view.conferencia} />

            <div className="overflow-hidden border border-slate-300 bg-white">
              <div className="border-b border-orange-100 bg-orange-50 px-3 py-2">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.05em] text-orange-900">
                  <MaterialIcon name="report_problem" className="text-sm text-orange-800" />
                  Detalhamento de avarias
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">Itens com avaria</caption>
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="w-40 p-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                        SKU
                      </th>
                      <th className="p-2 text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                        Descrição do item
                      </th>
                      <th className="w-24 p-2 text-right text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                        Qtd
                      </th>
                      <th className="w-32 p-2 text-center text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                        Evidência
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {view.avarias.map((row) => {
                      const isOpen = expandedAvariaId === row.id;
                      const handleRowClick = () => {
                        handleToggleAvaria(row);
                      };
                      const handleRowKeyDown = (event: KeyboardEvent<HTMLTableRowElement>) => {
                        if (event.key !== 'Enter' && event.key !== ' ') {
                          return;
                        }
                        event.preventDefault();
                        handleToggleAvaria(row);
                      };
                      return (
                        <Fragment key={row.id}>
                          <tr
                            role="button"
                            tabIndex={0}
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? 'Recolher' : 'Expandir'} avaria ${row.sku}`}
                            className={cn(
                              'cursor-pointer border-b border-slate-100',
                              isOpen ? 'bg-orange-50/40' : 'hover:bg-slate-50',
                            )}
                            onClick={handleRowClick}
                            onKeyDown={handleRowKeyDown}
                          >
                            <td className="px-2 py-2 font-mono text-[13px]">
                              <span className="inline-flex items-center gap-1">
                                <MaterialIcon
                                  name={isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                                  className={cn('text-sm', isOpen ? 'text-orange-600' : 'text-slate-400')}
                                />
                                {row.sku}
                              </span>
                            </td>
                            <td className="px-2 py-2 font-medium uppercase text-slate-800">{row.descricao}</td>
                            <td className="px-2 py-2 text-right font-bold text-orange-600">{row.quantidade}</td>
                            <td className="px-2 py-2 text-center">
                              <Button
                                type="button"
                                variant="ghost"
                                className="h-auto gap-1 px-2 py-1 text-[11px] font-bold text-[#001736] hover:bg-[#002B5B]/10"
                                onClick={(event) => event.stopPropagation()}
                              >
                                <MaterialIcon name="visibility" className="text-base" />
                                Ver foto
                              </Button>
                            </td>
                          </tr>
                          {isOpen && row.imagens.length > 0 ? (
                            <tr className="bg-orange-50/20">
                              <td colSpan={4} className="px-4 py-3">
                                <div className="flex flex-wrap gap-4">
                                  {row.imagens.map((img) => (
                                    <div
                                      key={img.id}
                                      className="group relative size-24 cursor-pointer overflow-hidden border border-slate-300 bg-slate-200"
                                    >
                                      <img src={img.src} alt={img.alt} className="size-full object-cover" />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                                        <MaterialIcon name="zoom_in" className="text-sm text-white" />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ) : null}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <section className="border border-slate-300 bg-white p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.05em] text-slate-600">
                  Fotos do processo por etapa
                </h3>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto gap-1 p-0 text-[11px] font-bold text-[#001736] hover:bg-transparent hover:underline"
                  onClick={handleCapturarEvidenciaClick}
                >
                  <MaterialIcon name="add_a_photo" className="text-base" />
                  Capturar evidência
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {view.fotosEtapa.map((etapa) => (
                  <div key={etapa.id} className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                      {etapa.titulo}
                    </span>
                    {etapa.tipo === 'placeholder' ? (
                      <button
                        type="button"
                        className="flex aspect-square w-full flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 transition-colors hover:bg-slate-50"
                        aria-label="Adicionar foto da etapa lacre"
                      >
                        <MaterialIcon name="add_a_photo" className="text-xl" />
                        <span className="mt-1 text-[10px] font-bold">Adicionar</span>
                      </button>
                    ) : null}
                    {etapa.tipo === 'imagem' && etapa.src ? (
                      <div className="group relative aspect-square overflow-hidden border border-slate-200 bg-slate-100">
                        <img
                          src={etapa.src}
                          alt={etapa.alt ?? etapa.titulo}
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <MaterialIcon name="zoom_in" className="text-white" />
                        </div>
                      </div>
                    ) : null}
                    {etapa.tipo === 'overlay' && etapa.src ? (
                      <div className="group relative aspect-square cursor-pointer overflow-hidden border border-slate-200 bg-slate-100">
                        <img
                          src={etapa.src}
                          alt={etapa.alt ?? etapa.titulo}
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white">
                          <span className="text-xl font-bold">{etapa.overlayText}</span>
                          <span className="text-[10px] font-bold uppercase tracking-tighter">Ver todas</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="col-span-12 xl:col-span-3">
            <DetalheStatusTimeline steps={view.timeline} />
          </aside>
        </div>
      </main>

      <button
        type="button"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#001736] text-white shadow-lg transition-transform hover:scale-105 lg:hidden"
        aria-label="Abrir leitor de código de barras"
        onClick={handleScannerFabClick}
      >
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }} aria-hidden>
          barcode_scanner
        </span>
      </button>
    </div>
  );
};
