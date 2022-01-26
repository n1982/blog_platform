/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchUpdateUserProfile, setUserIsNotEdit } from '../store/userSlice';
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.user);
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);
  const errorUserServer = useSelector((state) => state.user.errorUserServer);
  const userIsEdit = useSelector((state) => state.user.userIsEdit);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (userRequestStatus === 'fulfilled' && userIsEdit) {
      dispatch(setUserIsNotEdit());
      navigate(fromPage, { replace: true });
    }
  }, [navigate, fromPage, userRequestStatus, userIsEdit, dispatch]);

  const handlerFormSubmit = (data) => {
    dispatch(fetchUpdateUserProfile(data));
  };

  return (
    <>
      {errorUserServer && <ErrorMessage serverError={errorUserServer} />}
      <UserForm user={user} handlerFormSubmit={handlerFormSubmit} />
    </>
  );
};

export default EditProfile;
