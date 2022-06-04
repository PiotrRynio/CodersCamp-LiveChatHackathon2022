import React from 'react';
import { Quiz } from 'views';
import { TopBar } from 'components';

export const App = () => {
  return (
    <>
      <div>
        <TopBar />
        <Quiz />
      </div>
    </>
  );
};
