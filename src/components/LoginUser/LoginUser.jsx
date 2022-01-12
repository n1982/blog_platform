import React from 'react';
import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material';

import './LoginUser.scss';

const LoginUser = () => {
  console.log('LoginUser');

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: 384,
      }}
    >
      <Paper
        sx={{
          p: 5,
        }}
      >
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
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Password</Typography>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 3,
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
          }}
        >
          Login
        </Button>

        <Typography variant="body2" justify="center" align="center">
          Don’t have an account? <Link>Sign Up</Link>.
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginUser;
