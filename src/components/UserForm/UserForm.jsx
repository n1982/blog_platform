import React, { useState } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCreateUser } from '../../store/userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const signup = true;
  const edit = false;

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const formTitle = 'Create new account';
  const buttonLable = 'Create';
  console.log('user from');

  const handlerFormSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCreateUser({ username: userName, email: userEmail, password }));
    console.log('form submit');
  };

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: 384,
      }}
    >
      <form onSubmit={(event) => handlerFormSubmit(event)}>
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
          {signup && <Typography>Password</Typography>}
          {edit && <Typography>New password</Typography>}
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
          {signup && <Typography>Repeat Password</Typography>}
          {signup && (
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
          {edit && <Typography>Avatar image (url)</Typography>}
          {edit && (
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
          <Divider
            sx={{
              mb: 1,
            }}
          />
          <FormControlLabel
            control={<Checkbox checked={isChecked} onClick={() => setIsChecked(!isChecked)} />}
            label="I agree to the processing of my personal
information"
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
            }}
          >
            {buttonLable}
          </Button>

          <Typography variant="body2" justify="center" align="center">
            Already have an account? <Link to="/sign-in">Sign In</Link>.
          </Typography>
        </Paper>
      </form>
    </Box>
  );
};

export default UserForm;
