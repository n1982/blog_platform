import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatarPicture from '../assets/img/Avatar.png';
import { logOut } from '../store/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.email);
  const userName = useSelector((state) => state.user.username) || 'Jon Doe';
  const userAvatar = useSelector((state) => state.user.image) || avatarPicture;

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
          {auth && <Typography variant="h6">{userName}</Typography>}
          {/* Отображается когда пользователь залогинился */}
          {auth && <Avatar alt="Avatar" src={userAvatar} sx={{ width: 46, height: 46 }} />}
        </Link>
        {!auth && (
          <Link to="/sign-in" style={{ textDecoration: 'none' }} state={{ from: location }}>
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
    </AppBar>
  );
};

export default Header;
