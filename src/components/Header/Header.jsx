/* eslint-disable arrow-body-style */
import React from 'react';

import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import avatarPicture from '../../assets/img/Avatar.png';

const Header = () => {
  const showElement = false;
  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 'unset' }}>
      <Toolbar>
        <Link style={{ textDecoration: 'none', flexGrow: 1 }} to="/articles">
          <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Realworld Blog
          </Typography>
        </Link>

        {showElement && (
          <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
            Create article
          </Button>
        )}
        {showElement && <Typography variant="h6">John Doe</Typography>}
        {showElement && <Avatar alt="Avatar" src={avatarPicture} sx={{ width: 46, height: 46 }} />}
        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
          <Button sx={{ textTransform: 'none', mr: 3, color: 'black' }}>Sign In</Button>
        </Link>
        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
          <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
            Sign Up
          </Button>
        </Link>
        {showElement && (
          <Button color="inherit" variant="outlined" sx={{ textTransform: 'none' }}>
            Log Out
          </Button>
        )}
      </Toolbar>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item>
          <Link to="/profile">Profile</Link>
        </Grid>
        <Grid item>
          <Link to="/new-article">Новая статья</Link>
        </Grid>
        <Grid item>
          <Link to="/articles/{slug}/edit">Изменение статьи</Link>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
