/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCreateUser, setUserIsNotEdit } from '../store/userSlice';
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);
  const errorUserServer = useSelector((state) => state.user.errorUserServer);
  const userIsEdit = useSelector((state) => state.user.userIsEdit);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (userRequestStatus === 'fulfilled' && userIsEdit) {
      navigate(fromPage, { replace: true });
      dispatch(setUserIsNotEdit());
    }
  }, [dispatch, navigate, fromPage, userRequestStatus, userIsEdit]);

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
