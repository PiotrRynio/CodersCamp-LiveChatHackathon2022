import React from 'react';
import { usePageTitle } from 'providers/PageTitleProvider';
import {Button} from "../../components";

export const App = () => {
  const { title } = usePageTitle();
  return <><Button/></>

};
