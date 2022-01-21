/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
// eslint-disable-next-line no-unused-vars
import { fetchCreateUser } from '../store/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  console.log('SignUp');
  const handlerFormSubmit = (data) => {
    dispatch(fetchCreateUser(data));
    console.log('form signUP submit', data);
  };
  // const handlerFormSubmit = (event, userName, userEmail, _, password) => {
  //   event.preventDefault();
  //   dispatch(fetchCreateUser({ username: userName, email: userEmail, password }));
  //   console.log('form submit');
  // };
  return <UserForm signUp handlerFormSubmit={handlerFormSubmit} />;
};

export default SignUp;
