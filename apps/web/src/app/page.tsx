import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lilo-wms/ui';

const HomePage = () => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>lilo-wms</CardTitle>
          <CardDescription>Next 15 + shadcn (pacote @lilo-wms/ui). API: variável NEXT_PUBLIC_API_URL</CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button">shadcn Button</Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default HomePage;
