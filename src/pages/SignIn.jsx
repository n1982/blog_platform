/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLoginUser } from '../store/userSlice';
import SignInForm from '../components/SignInForm';
import ErrorMessage from '../components/ErrorMessage';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);
  const errorUserServer = useSelector((state) => state.user.errorUserServer);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (userRequestStatus === 'fulfilled') {
      navigate(fromPage, { replace: true });
    }
  }, [navigate, fromPage, userRequestStatus]);

  const handleFormSubmit = (data) => {
    dispatch(fetchLoginUser({ email: data.email, password: data.password }));
  };
  return (
    <>
      {errorUserServer && <ErrorMessage serverError={errorUserServer} />}
      <SignInForm handleFormSubmit={handleFormSubmit} />;
    </>
  );
};

export default SignIn;
