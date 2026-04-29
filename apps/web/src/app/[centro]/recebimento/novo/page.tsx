import { CadastroRecebimentoScreen } from '@/features/recebimento';

type NovoRecebimentoPageProps = {
  params: Promise<{ centro: string }>;
};

const NovoRecebimentoPage = async ({ params }: NovoRecebimentoPageProps) => {
  const { centro } = await params;
  return <CadastroRecebimentoScreen centro={centro} />;
};

export default NovoRecebimentoPage;
