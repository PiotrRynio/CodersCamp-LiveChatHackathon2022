import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Quiz } from 'views';
import { MainContent, Wrapper } from './App.styled';
import { TopBar } from 'components';
import { StartQuizPage } from '../StartQuizPage';
import { Footer } from 'components';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainContent>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<StartQuizPage startQuizTitle="example" startQuizText="text" />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
