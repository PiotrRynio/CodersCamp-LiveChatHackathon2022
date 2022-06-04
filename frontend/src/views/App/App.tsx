import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Button, Typography } from '../../components';

export const App = () => {
  const { title } = usePageTitle();
  return (
    <>
      <Button
        text="example"
        variant="primary"
        onClick={() => {
          console.log('click');
        }}
      />
      <Typography variant="title">Title</Typography>
    </>
  );
};
