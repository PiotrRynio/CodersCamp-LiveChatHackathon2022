import React from 'react';
import { Quiz } from 'views';
import { TopBar } from 'components';
import { Footer, MainContent, Wrapper } from './App.styled';
import { TestSummary } from 'components/TestSummary/TestSummary';

export const App = () => {
  return (
    <>
      <TestSummary />
    </>
  );
};
