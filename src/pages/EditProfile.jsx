/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
// eslint-disable-next-line no-unused-vars
import { fetchUpdateUserProfile } from '../store/userSlice';
import ErrorMessage from '../components/ErrorMessage';
import Spinner from '../components/Spinner';

const EditProfile = () => {
  console.log('EditProfile');
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userRequestStatus = useSelector((state) => state.user.userRequestStatus);

  const handlerFormSubmit = (data) => {
    dispatch(fetchUpdateUserProfile(data));
  };

  return <UserForm user={user} handlerFormSubmit={handlerFormSubmit} />;
};

export default EditProfile;
