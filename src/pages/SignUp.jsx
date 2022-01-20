import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
import { fetchCreateUser } from '../store/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  console.log('SignUp');
  const handlerFormSubmit = (event, userName, userEmail, password) => {
    event.preventDefault();
    dispatch(fetchCreateUser({ username: userName, email: userEmail, password }));
    console.log('form submit');
  };
  return <UserForm signUp handlerFormSubmit={handlerFormSubmit} />;
};

export default SignUp;
