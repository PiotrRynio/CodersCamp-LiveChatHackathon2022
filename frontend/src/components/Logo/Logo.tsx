import React from 'react';
import { Wrapper } from './Logo.styled';
import liveChatLogo from 'assets/images/liveChatLogo.png';

export const Logo = () => {
  return (
    <Wrapper>
      <img src={liveChatLogo} alt="live-chat-logo" /> LiveChat Quiz
    </Wrapper>
  );
};
