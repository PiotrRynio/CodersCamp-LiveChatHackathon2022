import {
  ContentWrapper,
  TitleWrapper,
  Wrapper,
  ButtonSection,
  TextWrapper,
  ImageWrapper,
  Image,
} from './WelcomePage.styled';
import { Button } from 'components/Button/Button';
import { Typography } from '../../components';
import trolImage from 'assets/images/trolImage.png';

export const WelcomePage = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <TextWrapper>
            <Typography variant={'title'}>Czy nie dasz się złapać dezinformacji?</Typography>
            <Typography variant={'body'}>
              “Wydaje się, że najskuteczniejszym sposobem zwalczania dezinformacji są świadomi, krytyczni i
              wyedukowani internauci. Wiedza i edukacja to obecnie najlepsza odpowiedź na to negatywne
              zjawisko.”
            </Typography>
          </TextWrapper>
          <ImageWrapper>
            <Image src={trolImage} alt="live-chat-logo" />
          </ImageWrapper>
        </ContentWrapper>
        <ButtonSection>
          <Typography variant={'body'}>Sprawdź się ze znajomymi. Naucz ich, jak działać w sieci!</Typography>
          <Button text={'Zaczynamy!'} onClick={() => console.log('XD')} variant={'primary'} />
        </ButtonSection>
      </Wrapper>
    </>
  );
};
