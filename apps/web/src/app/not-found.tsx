import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="text-muted-foreground">O endereço solicitado não existe ou foi movido.</p>
      <Link href="/" className="text-primary underline underline-offset-4">
        Voltar ao início
      </Link>
    </main>
  );
};

export default NotFound;
