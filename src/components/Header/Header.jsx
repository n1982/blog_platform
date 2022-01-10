/* eslint-disable arrow-body-style */
import React from 'react';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import './Header.scss';

const Header = () => {
  console.log('header');
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Realworld Blog
        </Typography>
        <Button color="inherit">Sign In</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
