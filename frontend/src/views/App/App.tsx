import React from 'react';
import { Quiz } from 'views';
import { MainContent, Wrapper } from './App.styled';
import { TopBar } from '../../components/TopBar/TopBar';
import { Footer } from '../../components/Footer';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainContent>
        <Quiz />
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
