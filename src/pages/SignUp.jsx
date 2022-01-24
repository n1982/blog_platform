/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import UserForm from '../components/UserForm';
// eslint-disable-next-line no-unused-vars
import { fetchCreateUser } from '../store/userSlice';
import ErrorMessage from '../components/ErrorMessage';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);
  const errorUserServer = useSelector((state) => state.user.errorUserServer);

  useEffect(() => {
    if (userRequestStatus === 'fulfilled') {
      navigate(fromPage, { replace: true });
    }
  }, [navigate, fromPage, userRequestStatus]);

  const handlerFormSubmit = (data) => {
    dispatch(fetchCreateUser(data));
  };

  return (
    <>
      {errorUserServer && <ErrorMessage serverError={errorUserServer} />}
      <UserForm signUp handlerFormSubmit={handlerFormSubmit} />;
    </>
  );
};

export default SignUp;
