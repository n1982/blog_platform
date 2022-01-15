import React from 'react';
import { Container } from '@mui/material';

import './Main.scss';
import ArticleList from '../ArticleList';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '100px' }}>
      <ArticleList />
    </Container>
  );
};

export default Main;
