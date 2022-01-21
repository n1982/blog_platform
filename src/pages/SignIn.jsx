import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { fetchLoginUser } from '../store/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const onSubmit = (data) => {
    dispatch(fetchLoginUser({ email: data.email, password: data.password }));
    navigate(fromPage, { replace: true });
    reset();
  };

  return (
    <Box
      sx={{
        m: 'auto',
        mt: 10,
        maxWidth: 384,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register('email', {
              required: 'Поле email обязательно к заполнению',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Не корректный email',
              },
            })}
            id="email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
          />
          {errors?.email && <Typography>{errors?.email?.message}</Typography>}
          <Typography>Password</Typography>
          <TextField
            {...register('password', {
              required: 'Поле password обязательно к заполнению',
              minLength: {
                value: 6,
                message: 'Пароль не может содержать менее 6 символов',
              },
              maxLength: {
                value: 40,
                message: 'Пароль не может содержать более 40 символов',
              },
            })}
            type="password"
            id="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 3,
            }}
          />
          {errors?.password && <Typography>{errors?.password?.message}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
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

export default SignIn;
