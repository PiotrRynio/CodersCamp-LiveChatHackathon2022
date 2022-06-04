import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin: 32px 0;
  width: 100%;
  display: flex;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 10px;
  width: 50%;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
`;
export const Image = styled.img`
  width: 600px;
  display: block;
`;
export const TitleWrapper = styled.div`
  border: 1px black solid;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonSection = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
