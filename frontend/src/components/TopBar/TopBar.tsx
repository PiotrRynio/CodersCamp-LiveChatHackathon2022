import React from 'react';
import { Wrapper, Content, RightSection, LeftSection, PageTitle } from './TopBar.styled';
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
        <RightSection />
        <div />
      </Content>
    </Wrapper>
  );
};
