import { DetalheRecebimentoScreen } from '@/features/recebimento';

type DetalheRecebimentoPageProps = {
  params: Promise<{ centro: string; id: string }>;
};

const DetalheRecebimentoPage = async ({ params }: DetalheRecebimentoPageProps) => {
  const { centro, id } = await params;

  return <DetalheRecebimentoScreen centro={centro} id={id} />;
};

export default DetalheRecebimentoPage;
