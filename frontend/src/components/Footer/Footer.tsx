import React from 'react';
import { Wrapper, FooterText } from './Footer.styled';

export const Footer = () => {
  return (
    <Wrapper>
      <FooterText>
        <span title="Tak! To jest właśnie dezinformacja!">
          Created by Team 12 at CodersCamp, who took first place in LiveChat Hackathon 2022
        </span>
      </FooterText>
    </Wrapper>
  );
};
