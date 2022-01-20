import React, { useState } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const UserForm = (props) => {
  const { signUp, user, handlerFormSubmit } = props || null;
  const formTitle = signUp ? 'Create new account' : 'Edit profile';
  const buttonLabel = signUp ? 'Create' : 'Save';

  const [userName, setUserName] = useState(user?.username || '');
  const [userEmail, setUserEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(user?.image || '');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: 384,
      }}
    >
      <form onSubmit={(event) => handlerFormSubmit(event, userName, userEmail, avatarUrl, password)}>
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
            {formTitle}
          </Typography>
          <Typography>Username</Typography>
          <TextField
            id="username"
            value={userName}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <Typography>Email address</Typography>
          <TextField
            id="email"
            value={userEmail}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />
          {signUp && <Typography>Password</Typography>}
          {!signUp && <Typography>New password</Typography>}
          <TextField
            id="password"
            value={password}
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {signUp && <Typography>Repeat Password</Typography>}
          {signUp && (
            <TextField
              id="password-repeat"
              value={passwordRepeat}
              type="password"
              size="small"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(event) => {
                setPasswordRepeat(event.target.value);
              }}
            />
          )}
          {!signUp && <Typography>Avatar image (url)</Typography>}
          {!signUp && (
            <TextField
              id="avatar-url"
              value={avatarUrl}
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(event) => {
                setAvatarUrl(event.target.value);
              }}
            />
          )}
          {signUp && (
            <Divider
              sx={{
                mb: 1,
              }}
            />
          )}
          {signUp && (
            <FormControlLabel
              control={<Checkbox checked={isChecked} onClick={() => setIsChecked(!isChecked)} />}
              label="I agree to the processing of my personal
information"
            />
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
            }}
          >
            {buttonLabel}
          </Button>

          {signUp && (
            <Typography variant="body2" justify="center" align="center">
              Already have an account? <Link to="/sign-in">Sign In</Link>.
            </Typography>
          )}
        </Paper>
      </form>
    </Box>
  );
};

export default UserForm;
