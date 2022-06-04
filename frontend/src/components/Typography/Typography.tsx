export interface TypographyProps {
  children: React.ReactNode;
  variant: 'title' | 'subtitle' | 'body';
}

export const Typography = ({ children, variant = 'body' }: TypographyProps) => {
  return <p>{children}</p>;
};
