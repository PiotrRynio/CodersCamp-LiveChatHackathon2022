import React, { createContext, useContext, useState } from 'react';

interface TitleContext {
  pageTitle: string;
  setPageTitle: (newTitle: string) => void;
}

const appContextDefaultValue = {
  pageTitle: '',
  setPageTitle: (newTitle: string) => {},
};

const PageTitleContext = createContext<TitleContext>(appContextDefaultValue);

const PageTitleProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageTitle, setPageTitle] = useState<string>(appContextDefaultValue.pageTitle);

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>{children}</PageTitleContext.Provider>
  );
};

const usePageTitle = () => useContext(PageTitleContext);

export { PageTitleProvider, usePageTitle };
