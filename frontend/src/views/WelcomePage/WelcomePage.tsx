import { ContentWrapper, TitleWrapper, Wrapper } from './WelcomePage.styled';
import { Button } from 'components/Button/Button';

export const WelcomePage = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper />
        </ContentWrapper>
        <Button text={'Zaczynamy!'} onClick={() => console.log('XD')} variant={'primary'} />
      </Wrapper>
    </>
  );
};
