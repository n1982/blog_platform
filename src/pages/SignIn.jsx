import React from 'react';
import * as Yup from 'yup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { fetchLoginUser } from '../store/userSlice';

const SignIn = () => {
  const dispatch = useDispatch();

  //  Правила валидации
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Поле "Email" должно быть заполнено').email('Email не верный'),
    password: Yup.string()
      .min(6, 'Поле "Password" не должно содержать менее 6 символов')
      .required('Поле "Password" должно быть заполнено'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
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
            id="email"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 1,
            }}
            {...register('email')}
            error={!!errors?.email}
            helperText={errors?.email?.message}
          />

          <Typography>Password</Typography>
          <TextField
            type="password"
            id="password"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: 3,
            }}
            {...register('password')}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />

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
