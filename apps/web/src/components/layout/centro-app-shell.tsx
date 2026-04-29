'use client';

import { useState, type ReactNode } from 'react';

import { cn } from '@lilo-wms/ui';

import { Sidebar } from './sidebar';

type CentroAppShellProps = {
  children: ReactNode;
};

export const CentroAppShell = ({ children }: CentroAppShellProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleIsCollapsedChange = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <div className="flex h-screen w-full min-h-0 overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} onIsCollapsedChange={handleIsCollapsedChange} />
      <main
        className={cn(
          'min-w-0 flex-1 overflow-y-auto bg-background transition-[margin] duration-150 ease-in-out',
          isCollapsed ? 'ml-16' : 'ml-64'
        )}
      >
        {children}
      </main>
    </div>
  );
};
