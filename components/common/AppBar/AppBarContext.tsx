'use client';

import React, { useState } from 'react';

const AppBarContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

export function AppBarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBarContext.Provider value={[open, setOpen]}>
      {children}
    </AppBarContext.Provider>
  );
}

export function useAppBarContext() {
  const context = React.useContext(AppBarContext);
  if (context === undefined) {
    throw new Error('useAppBarContext must be used within a AppBarProvider');
  }
  return context;
}
