import { Title, Subtitle, BodySmall, BodyMedium, Button } from './Typography.styled';

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'subtitle' | 'body-small' | 'body-medium' | 'button';
}

export const Typography = ({ children, variant = 'body-medium' }: TypographyProps) => {
  if (variant === 'title') {
    return <Title>{children}</Title>;
  }
  if (variant === 'subtitle') {
    return <Subtitle>{children}</Subtitle>;
  }
  if (variant === 'button') {
    return <Button>{children}</Button>;
  }
  if (variant === 'body-medium') {
    return <BodyMedium>{children}</BodyMedium>;
  }
  if (variant === 'body-small') {
    return <BodySmall>{children}</BodySmall>;
  }
  return <p>{children}</p>;
};
