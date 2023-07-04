import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from 'react-query';

import { Error } from 'sy-core/components/Layout';
import { Loading } from 'sy-core/components/Elements';
import { queryClient } from '@/lib/query';
import { light } from '@/theme';

const ErrorFallback = ({ error }: { error: any | null }) => {
  console.log(error);
  return (
    <Error
      message={error.error.message}
      description={error.error.description}
      instructions={error.error.instructions}
      thanks={error.error.thanks}
    />
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<Loading load={true} />}>
      <HelmetProvider>
        <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={error} />}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={light}>{children}</ThemeProvider>
          </QueryClientProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </React.Suspense>
  );
};
