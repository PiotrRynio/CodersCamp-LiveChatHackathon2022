import { IconContainer, Wrapper } from './ShareIcons.styled';
import { SocialIcon } from 'react-social-icons';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

export interface ShareIcons {
  result: string;
}

export const ShareIcons = ({ result }: ShareIcons) => {
  return (
    <Wrapper>
      <IconContainer>
        <FacebookShareButton
          url="https://fakemeter.netlify.app/"
          hashtag="#dezinformacja"
          quote={`Mój wynik w teście wynosi ${result}! A Ty jaką masz świadomość dezinformacji w sieci?`}
        >
          <SocialIcon network="facebook" bgColor="white" style={{ height: 80, width: 80 }} />
        </FacebookShareButton>
      </IconContainer>
      <IconContainer>
        <LinkedinShareButton
          url="https://fakemeter.netlify.app/"
          title="The web developer expert in Auvergne"
          summary="The web developer expert in Auvergne"
        >
          <SocialIcon network="linkedin" bgColor="white" style={{ height: 80, width: 80 }} />
        </LinkedinShareButton>
      </IconContainer>
      <IconContainer>
        <TwitterShareButton
          url="https://fakemeter.netlify.app/"
          title={`Mój wynik w teście wynosi ${result}! A Ty jaką masz świadomość dezinformacji w sieci?`}
        >
          <SocialIcon network="twitter" bgColor="white" style={{ height: 80, width: 80 }} />
        </TwitterShareButton>
      </IconContainer>
    </Wrapper>
  );
};
