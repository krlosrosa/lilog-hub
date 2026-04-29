import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@lilo-wms/ui/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'lilo-wms',
  description: 'WMS – scaffold',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
