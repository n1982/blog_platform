import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const SignUp = () => {
  console.log('SignUp');

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
          Create new account
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
        <Typography>Password</Typography>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 1,
          }}
        />
        <Typography>Repeat Password</Typography>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: 2,
          }}
        />
        <Divider
          sx={{
            mb: 1,
          }}
        />
        <FormGroup
          sx={{
            mb: 2,
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I agree to the processing of my personal
information"
          />
        </FormGroup>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
          }}
        >
          Create
        </Button>

        <Typography variant="body2" justify="center" align="center">
          Already have an account? <Link>Sign In</Link>.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
