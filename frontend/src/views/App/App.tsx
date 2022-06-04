import React from 'react';
import { Quiz } from 'views';
import { MainContent, Wrapper } from './App.styled';
import { TopBar } from 'components';
import { Footer } from 'components';
import { TestSummary } from '../../components/TestSummary/TestSummary';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainContent>
        <TestSummary result={'100%'} />
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
