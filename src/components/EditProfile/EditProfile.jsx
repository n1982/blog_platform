import React from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import './EditProfile.scss';

const EditProfile = () => {
  console.log('CreateUser');

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
          Edit Profile
        </Typography>
        <Typography>Username</Typography>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
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
        <Typography>New password</Typography>
        <TextField
          id="outlined-basic"
          label="New password"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Avatar image (url)</Typography>
        <TextField
          id="outlined-basic"
          label="Avatar image (url)"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 3,
          }}
        />

        <Button variant="contained" fullWidth>
          Save
        </Button>
      </Paper>
    </Box>
  );
};

export default EditProfile;
