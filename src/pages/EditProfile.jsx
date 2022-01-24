/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchUpdateUserProfile, setUserIsNotEdit } from '../store/userSlice';

// eslint-disable-next-line no-unused-vars
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';

const EditProfile = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);
  const errorUserServer = useSelector((state) => state.user.errorUserServer);
  const userIsEdit = useSelector((state) => state.user.userIsEdit);

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
