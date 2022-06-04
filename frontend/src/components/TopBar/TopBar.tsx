import React from 'react';
import { Wrapper, Content } from './TopBar.styled';
import { Logo } from '../Logo';

export const TopBar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo />
        <div />
      </Content>
    </Wrapper>
  );
};
