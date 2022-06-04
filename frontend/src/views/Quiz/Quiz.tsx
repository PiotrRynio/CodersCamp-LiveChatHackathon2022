import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Button, Typography } from '../../components';

export const Quiz = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');
  return (
    <section>
      <Button
        variant="primary"
        text="button text"
        onClick={() => {
          console.log('click');
        }}
      />
      <Typography variant="title">Title</Typography>
    </section>
  );
};
