import styled from 'styled-components';

interface Props {
  showWarning: boolean;
}

export const StyledWrapper = styled.div<Props>`
  position: fixed;
  top: ${({ showWarning }) => (showWarning ? '0' : '100%')};
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;
export const StyledInnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transform: translate(-50%, -50%);
  min-height: 400px;
  min-width: 300px;
  background-color: #ffd000;
  border-radius: 4px;
  z-index: 2;
`;
