import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@mui/material';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatarPicture from '../../assets/img/Avatar.png';
import { logOut } from '../../store/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.email);

  // создать хук useRedirectFromPage
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handleLogOutClick = () => {
    dispatch(logOut());

    navigate(fromPage, { replace: true });
  };

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
            <Link style={{ textDecoration: 'none', flexGrow: 1 }} to="/new-article">
              Create article
            </Link>
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
          <Button color="inherit" variant="outlined" sx={{ textTransform: 'none' }} onClick={handleLogOutClick}>
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
