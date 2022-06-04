import React from 'react';
import { Quiz } from 'views';
import { TopBar } from 'components';
import { Footer, MainContent, Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrapper>
        <TopBar />
        <MainContent>
          <Quiz />
        </MainContent>
        <Footer />
      </Wrapper>
    </>
  );
};
