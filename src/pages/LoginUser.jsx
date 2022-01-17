import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { fetchLoginUser } from '../store/userSlice';

const LoginUser = () => {
  const dispatch = useDispatch();

  console.log('LoginUser');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: 384,
      }}
    >
      <form>
        <Paper sx={{ p: 5 }}>
          <Typography
            variant="h6"
            justify="center"
            align="center"
            sx={{
              mb: 1,
            }}
          >
            Sign In
          </Typography>

          <Typography>Email address</Typography>
          <TextField
            id="email"
            value={email}
            label="Email address"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Typography>Password</Typography>
          <TextField
            type="password"
            id="password"
            label="Password"
            value={password}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 3,
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
            }}
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchLoginUser({ email, password }));
              setEmail('');
              setPassword('');
            }}
          >
            Login
          </Button>

          <Typography variant="body2" justify="center" align="center">
            Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
          </Typography>
        </Paper>
      </form>
    </Box>
  );
};

export default LoginUser;
