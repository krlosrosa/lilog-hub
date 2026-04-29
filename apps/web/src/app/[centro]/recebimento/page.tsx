import { RecebimentoOverviewScreen } from '@/features/recebimento';

type RecebimentoPageProps = {
  params: Promise<{ centro: string }>;
};

const RecebimentoPage = async ({ params }: RecebimentoPageProps) => {
  const { centro } = await params;
  return <RecebimentoOverviewScreen centro={centro} />;
};

export default RecebimentoPage;
