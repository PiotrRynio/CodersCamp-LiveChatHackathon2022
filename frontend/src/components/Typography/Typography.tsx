export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'subtitle' | 'body' | 'button';
}

export const Typography = ({ children, variant = 'body' }: TypographyProps) => {
  if (variant === 'title') {
    return <h3>{children}</h3>;
  }
  if (variant === 'subtitle') {
    return <h4>{children}</h4>;
  }
  if (variant === 'button') {
    return <p>{children}</p>;
  }
  if (variant === 'body') {
    return <p>{children}</p>;
  }
  return <p>{children}</p>;
};
