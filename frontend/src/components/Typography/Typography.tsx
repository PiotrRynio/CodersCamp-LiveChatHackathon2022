import { Body1, Heading3, Heading4, Button } from './Typography.styled';

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'subtitle' | 'body' | 'button';
}

export const Typography = ({ children, variant = 'body' }: TypographyProps) => {
  if (variant === 'title') {
    return <Heading3>{children}</Heading3>;
  }
  if (variant === 'subtitle') {
    return <Heading4>{children}</Heading4>;
  }
  if (variant === 'button') {
    return <Button>{children}</Button>;
  }
  if (variant === 'body') {
    return <Body1>{children}</Body1>;
  }
  return <p>{children}</p>;
};
