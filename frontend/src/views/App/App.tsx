import React from 'react';
import { Quiz } from 'views';
import { MainContent, Wrapper } from './App.styled';
import { TopBar } from 'components';
import { Footer } from 'components';
import { WelcomePage } from '../WelcomePage/WelcomePage';
import { VerifyInformation } from '../VerifyInformation';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainContent>
        {/*<Quiz />*/}
        <VerifyInformation />
        {/*<WelcomePage />*/}
      </MainContent>
      <Footer />
    </Wrapper>
  );
};
