import React from 'react';
import { Container } from '@mui/material';

import './Main.scss';
import CreateUser from '../CreateUser';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <CreateUser />
    </Container>
  );
};

export default Main;
