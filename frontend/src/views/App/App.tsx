import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Button, Typography } from '../../components';

export const App = () => {
  const { title } = usePageTitle();
  return (
    <>
      <Button />
      <Typography variant="title">Title</Typography>
    </>
  );
};
