/* eslint-disable arrow-body-style */
import React from 'react';

import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import './Header.scss';
import avatarPicture from '../../assets/img/Avatar.png';

const Header = () => {
  console.log('header');
  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 'unset' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Realworld Blog
        </Typography>
        <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
          Create article
        </Button>
        <Typography variant="h6">John Doe</Typography>
        <Avatar alt="Avatar" src={avatarPicture} sx={{ width: 46, height: 46 }} />
        <Button color="inherit" sx={{ textTransform: 'none', mr: 3 }}>
          Sign In
        </Button>
        <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
          Sign Up
        </Button>
        <Button color="inherit" variant="outlined" sx={{ textTransform: 'none' }}>
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
