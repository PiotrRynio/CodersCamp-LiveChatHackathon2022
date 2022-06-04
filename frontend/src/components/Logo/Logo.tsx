import React from 'react';
import { Wrapper, LogoImage } from './Logo.styled';
import liveChatLogo from 'assets/images/liveChatLogo.png';

export const Logo = () => {
  return (
    <Wrapper>
      <LogoImage src={liveChatLogo} alt="live-chat-logo" /> LiveChat Quiz
    </Wrapper>
  );
};
