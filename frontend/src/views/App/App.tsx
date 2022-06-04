import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Quiz } from 'views';
import { TopBar } from 'components';
import { StartQuizPage } from '../StartQuizPage';
import { Footer, MainContent, Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrapper>
        <TopBar />
        <MainContent>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<StartQuizPage startQuizTitle="example" startQuizText="text" />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>
        </MainContent>
        <Footer />
      </Wrapper>
    </>
  );
};
