/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
// eslint-disable-next-line no-unused-vars
import { fetchCreateUser } from '../store/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const handlerFormSubmit = (data) => {
    dispatch(fetchCreateUser(data));
  };

  return <UserForm signUp handlerFormSubmit={handlerFormSubmit} />;
};

export default SignUp;
