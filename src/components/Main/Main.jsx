import React from 'react';
import { Container } from '@mui/material';

import Article from '../Article';

import './Main.scss';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <Article />
    </Container>
  );
};

export default Main;
