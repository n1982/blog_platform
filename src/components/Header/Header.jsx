/* eslint-disable arrow-body-style */
import React from 'react';

import { useSelector } from 'react-redux';
import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@mui/material';

import { Link } from 'react-router-dom';
import avatarPicture from '../../assets/img/Avatar.png';

const Header = () => {
  const auth = useSelector((state) => state.user.email);
  return (
    <AppBar position="fixed" color="inherit" sx={{ boxShadow: 'unset' }}>
      <Toolbar>
        {/* Отображается постоянно */}
        <Link style={{ textDecoration: 'none', flexGrow: 1 }} to="/articles">
          <Typography color="black" variant="h6" component="div">
            Realworld Blog
          </Typography>
        </Link>
        {/* Отображается когда пользователь залогинился */}
        {auth && (
          <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
            Create article
          </Button>
        )}
        {/* Отображается когда пользователь залогинился */}
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          {auth && <Typography variant="h6">John Doe</Typography>}
          {/* Отображается когда пользователь залогинился */}
          {auth && <Avatar alt="Avatar" src={avatarPicture} sx={{ width: 46, height: 46 }} />}
        </Link>
        {!auth && (
          <Link to="/sign-in" style={{ textDecoration: 'none' }}>
            {/* Пользователь не  залогинен */}
            <Button sx={{ textTransform: 'none', mr: 3, color: 'black' }}>Sign In</Button>
          </Link>
        )}
        {!auth && (
          <Link to="/sign-up" style={{ textDecoration: 'none' }}>
            <Button color="success" variant="outlined" sx={{ textTransform: 'none' }}>
              Sign Up
            </Button>
          </Link>
        )}

        {/* Отображается когда пользователь залогинился */}
        {auth && (
          <Button color="inherit" variant="outlined" sx={{ textTransform: 'none' }}>
            Log Out
          </Button>
        )}
      </Toolbar>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
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
