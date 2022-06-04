import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Typography } from '../../components';

export const Quiz = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');
  return (
    <section>
      {/*<Button />*/}
      <Typography variant="title">Title</Typography>
    </section>
  );
};
