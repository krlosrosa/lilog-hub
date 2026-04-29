import Link from 'next/link';

type CentroPageProps = {
  params: Promise<{ centro: string }>;
};

const CentroPage = async ({ params }: CentroPageProps) => {
  const { centro } = await params;

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#001736]">Dashboard</h1>
        <p className="mt-0.5 text-[13px] leading-[18px] text-slate-500">
          Centro: <span className="font-semibold text-slate-700">{centro}</span>
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-4 text-sm text-card-foreground shadow-sm">
        <p className="text-muted-foreground">Selecione um módulo no menu ou acesse o recebimento.</p>
        <Link
          href={`/${centro}/recebimento`}
          className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
        >
          Ir para Recebimento
        </Link>
      </div>
    </div>
  );
};

export default CentroPage;
