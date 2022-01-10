import React from 'react';
import { Container } from '@mui/material';

import ArticleList from '../ArticleList';

import './Main.scss';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <ArticleList />
    </Container>
  );
};

export default Main;
