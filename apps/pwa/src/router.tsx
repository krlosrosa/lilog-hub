import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '@/pages/login/LoginPage.js';

const HomeScreen = lazy(() =>
  import('@/features/homepage/screens/index.js').then((m) => ({ default: m.HomeScreen })),
);

const ListaDemandaScreen = lazy(() =>
  import('@/features/recebimento/screens/index.js').then((m) => ({ default: m.ListaDemandaScreen })),
);

const ChecklistScreen = lazy(() =>
  import('@/features/recebimento/screens/check-list.js').then((m) => ({ default: m.ChecklistScreen })),
);

const ChecklistAvariaScreen = lazy(() =>
  import('@/features/recebimento/screens/check-list-avaria.js').then((m) => ({
    default: m.ChecklistAvariaScreen,
  })),
);

const ConferenciaScreen = lazy(() =>
  import('@/features/recebimento/screens/conferencia.js').then((m) => ({ default: m.ConferenciaScreen })),
);

const ConferenciaItemScreen = lazy(() =>
  import('@/features/recebimento/screens/conferencia-item.js').then((m) => ({
    default: m.ConferenciaItemScreen,
  })),
);

const ListaDemandaAvariaScreen = lazy(() =>
  import('@/features/recuperacao-avaria/screens/index.js').then((m) => ({
    default: m.ListaDemandaAvariaScreen,
  })),
);

const ListaItensRecuperadosScreen = lazy(() =>
  import('@/features/recuperacao-avaria/screens/lista-itens-recuperados.js').then((m) => ({
    default: m.ListaItensRecuperadosScreen,
  })),
);

const RecuperacaoItemScreen = lazy(() =>
  import('@/features/recuperacao-avaria/screens/recuperacao-item.js').then((m) => ({
    default: m.RecuperacaoItemScreen,
  })),
);

const EstoqueMenuScreen = lazy(() =>
  import('@/features/estoque/screens/index.js').then((m) => ({ default: m.EstoqueMenuScreen })),
);

const GuardarItensScreen = lazy(() =>
  import('@/features/estoque/screens/guardar-itens.js').then((m) => ({
    default: m.GuardarItensScreen,
  })),
);

const ListaDemandaVariavelScreen = lazy(() =>
  import('@/features/variavel/screens/index.js').then((m) => ({
    default: m.ListaDemandaVariavelScreen,
  })),
);

const ListaItensVariavelScreen = lazy(() =>
  import('@/features/variavel/screens/lista-itens.js').then((m) => ({
    default: m.ListaItensVariavelScreen,
  })),
);

const PesagemVariavelScreen = lazy(() =>
  import('@/features/variavel/screens/pesagem.js').then((m) => ({
    default: m.PesagemVariavelScreen,
  })),
);

const MovimentacaoMenuScreen = lazy(() =>
  import('@/features/movimentacao/screens/index.js').then((m) => ({
    default: m.MovimentacaoMenuScreen,
  })),
);

const routeFallback = (
  <div className="min-h-dvh animate-pulse bg-muted" role="presentation" aria-hidden />
);

export const AppRouter = () => {
  return (
    <Suspense fallback={routeFallback}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/recebimento" element={<ListaDemandaScreen />} />
        <Route path="/recebimento/check-list" element={<ChecklistScreen />} />
        <Route path="/recebimento/check-list/avaria" element={<ChecklistAvariaScreen />} />
        <Route path="/recebimento/conferencia" element={<ConferenciaScreen />} />
        <Route path="/recebimento/conferencia/item" element={<ConferenciaItemScreen />} />
        <Route path="/recuperacao-avaria" element={<ListaDemandaAvariaScreen />} />
        <Route path="/recuperacao-avaria/itens" element={<ListaItensRecuperadosScreen />} />
        <Route path="/recuperacao-avaria/item" element={<RecuperacaoItemScreen />} />
        <Route path="/estoque" element={<EstoqueMenuScreen />} />
        <Route path="/estoque/armazenagem" element={<GuardarItensScreen />} />
        <Route path="/variavel" element={<ListaDemandaVariavelScreen />} />
        <Route path="/variavel/itens" element={<ListaItensVariavelScreen />} />
        <Route path="/variavel/pesagem" element={<PesagemVariavelScreen />} />
        <Route path="/movimentacao" element={<MovimentacaoMenuScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
};
