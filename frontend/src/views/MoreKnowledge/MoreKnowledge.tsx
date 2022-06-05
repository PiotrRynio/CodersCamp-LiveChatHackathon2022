import React from 'react';
import { ListItem, ListWrapper, Wrapper } from './MoreKnowledge.styled';
import { usePageTitle } from '../../providers/PageTitleProvider';
import { Typography } from '../../components';
import { moreKnowledgeMock } from 'mocks/moreKnowledgeMock';

export const MoreKnowledge = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('More Knowledge');

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
              <a href={link} target="_blank" rel="noopener noreferrer">
                [ zobacz więcej ]
              </a>
            </Typography>
          </ListItem>
        ))}
      </ListWrapper>
    </Wrapper>
  );
};
