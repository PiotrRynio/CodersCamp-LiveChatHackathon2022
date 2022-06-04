import React, { ReactNode } from 'react';
import { PageTitleProvider, usePageTitle } from './PageTitleProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets';
import { GlobalStyles } from 'assets';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './AppContextProvider';

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const { pageTitle } = usePageTitle();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <PageTitleProvider>
          <ThemeProvider theme={theme}>
            <Helmet>
              <title>{pageTitle}</title>
              <meta name="description" content="Helmet application" />
            </Helmet>
            <GlobalStyles theme={theme} />
            {children}
          </ThemeProvider>
        </PageTitleProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};
