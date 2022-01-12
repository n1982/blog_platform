import React from 'react';
import { Container } from '@mui/material';

import './Main.scss';
import LoginUser from '../LoginUser';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <LoginUser />
    </Container>
  );
};

export default Main;
