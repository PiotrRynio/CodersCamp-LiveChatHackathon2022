import { FiTwitter } from 'react-icons/fi';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import { IconContainer, Wrapper } from './ShareIcons.styled';
import { SocialIcon } from 'react-social-icons';

export const ShareIcons = () => {
  return (
    <Wrapper>
      <IconContainer>
        <SocialIcon network="facebook" bgColor="white" style={{ height: 80, width: 80 }} />
      </IconContainer>
      <IconContainer>
        <SocialIcon network="linkedin" bgColor="white" style={{ height: 80, width: 80 }} />
      </IconContainer>
      <IconContainer>
        <SocialIcon network="twitter" bgColor="white" style={{ height: 80, width: 80 }} />
      </IconContainer>
    </Wrapper>
  );
};
