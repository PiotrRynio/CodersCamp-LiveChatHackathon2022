import { ReactNode } from 'react';
import { PageTitleProvider } from './PageTitleProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets';
import { GlobalStyles } from 'assets';
import { Provider as ReduxToolkitProvider } from 'react-redux';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
      <PageTitleProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          {children}
        </ThemeProvider>
      </PageTitleProvider>
  );
};
