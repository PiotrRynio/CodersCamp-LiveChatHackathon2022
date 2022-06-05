import styled from 'styled-components';

interface Props {
  showWarning: boolean;
}

export const StyledInnerWrapper = styled.div<Props>`
  position: fixed;
  top: ${({ showWarning }) => (showWarning ? '50%' : 'calc(100% + 150px)')};
  left: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  min-height: 300px;
  min-width: 200px;
  background-color: #ffd000;
  border-radius: 4px;
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;
