import type { ReactNode } from 'react';

import { CentroAppShell } from '@/components/layout/centro-app-shell';

const CentroLayout = ({ children }: { children: ReactNode }) => {
  return <CentroAppShell>{children}</CentroAppShell>;
};

export default CentroLayout;
