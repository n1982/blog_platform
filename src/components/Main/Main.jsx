import React from 'react';
import { Container } from '@mui/material';

import './Main.scss';
import NewArticle from '../NewArticle';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <NewArticle />
    </Container>
  );
};

export default Main;
