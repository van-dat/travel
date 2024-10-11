"use client";

import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
    const theme = {
    colors: {
      primary: '#0070f3',
    },
  }
  return (
    <ThemeProvider theme={theme}  >
      {children}
    </ThemeProvider>
  );
}
