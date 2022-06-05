import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Quiz } from 'views';
import { MainContent, Wrapper } from './App.styled';
import { TopBar } from 'components';
import { StartQuizPage } from '../StartQuizPage';
import { Footer } from 'components';
import { WelcomePage } from '../WelcomePage/WelcomePage';
import { VerifyInformation } from '../VerifyInformation';
import { MoreKnowledge } from '../MoreKnowledge';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainContent>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="start-quiz" element={<StartQuizPage />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="verify-information" element={<VerifyInformation />} />
          <Route path="more-knowledge" element={<MoreKnowledge />} />
        </Routes>
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
