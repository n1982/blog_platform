import React from 'react';
import { Container } from '@mui/material';

import './Main.scss';
import EditProfile from '../EditProfile';

const Main = () => {
  console.log('Main');
  return (
    <Container sx={{ mt: '1rem' }}>
      <EditProfile />
    </Container>
  );
};

export default Main;
