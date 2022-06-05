import styled from 'styled-components';

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

export const Image = styled.img`
  height: 168px;
  width: 100px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
