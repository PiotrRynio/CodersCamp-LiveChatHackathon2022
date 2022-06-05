import styled from 'styled-components';
import { MdCheck, MdClose } from 'react-icons/md';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  border: 1px solid black;
  padding: 5px;
  margin-bottom: 20px;

  :hover {
    background-color: #ffd000;
    animation: shake 0.2s;
    animation-iteration-count: 1;

    a {
      background-color: #ffffff;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    20% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    40% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    60% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    80% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    100% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
  }
`;

export const AnswerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CorrectIcon = styled(MdCheck)`
  color: darkgreen;
  font-size: 56px;
`;

export const WrongIcon = styled(MdClose)`
  color: darkred;
  font-size: 56px;
`;

export const IconWrapper = styled.div`
  width: 50px;
`;

export const Link = styled.a`
  display: inline-block;
  transform: skewX(-10deg);
  padding: 0 2px;
  color: #000000;
  text-decoration: none;
  background-color: #ffd000;
`;
