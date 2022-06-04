import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Button, Typography } from '../../components';

export const Quiz = () => {
  const { setPageTitle } = usePageTitle();
  setPageTitle('Quiz Title');
  return (
    <>
      <Button />
      <Typography variant="title">Title</Typography>
    </>
  );
};
