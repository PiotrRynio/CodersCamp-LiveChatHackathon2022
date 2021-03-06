import React from 'react';
import {
  Wrapper,
  Content,
  RightSection,
  LeftSection,
  PageTitle,
  TextLink,
  StyledLink,
} from './TopBar.styled';
import { Logo } from '../Logo';
import { usePageTitle } from '../../providers/PageTitleProvider';

export const TopBar = () => {
  const { pageTitle } = usePageTitle();
  return (
    <Wrapper>
      <Content>
        <LeftSection>
          <Logo />
          <PageTitle>{pageTitle}</PageTitle>
        </LeftSection>
        <RightSection>
          <StyledLink to="start-quiz">
            <TextLink>Quiz</TextLink>
          </StyledLink>
          <StyledLink to="verify-news">
            <TextLink>News FakeMeter</TextLink>
          </StyledLink>
          <StyledLink to="verify-twitt">
            <TextLink>Tweet FakeMeter</TextLink>
          </StyledLink>
          <StyledLink to="more-knowledge">
            <TextLink>Dobre źródła</TextLink>
          </StyledLink>
        </RightSection>
      </Content>
    </Wrapper>
  );
};
