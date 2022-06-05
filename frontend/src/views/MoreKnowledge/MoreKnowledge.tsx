import React from 'react';
import { ListItem, ListWrapper, Wrapper, StyledLink } from './MoreKnowledge.styled';
import { usePageTitle } from '../../providers/PageTitleProvider';
import { Typography } from '../../components';
import { moreKnowledgeMock } from 'mocks/moreKnowledgeMock';

export const MoreKnowledge = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Źródła wiedzy');

  return (
    <Wrapper>
      <Typography variant="title">Gdzie się podszkolić?</Typography>
      <Typography variant="body1">Bazę informacji znajdziesz poniżej w linkach.</Typography>
      <ListWrapper>
        {moreKnowledgeMock.articleList.map(({ title, link, text }) => (
          <ListItem key={title}>
            <Typography variant="subtitle">{title}</Typography>
            <Typography variant="body1">
              {`${text} `}
              <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                zobacz więcej
              </StyledLink>
            </Typography>
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
