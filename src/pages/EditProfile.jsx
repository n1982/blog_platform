import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
import { fetchUpdateUserProfile } from '../store/userSlice';

const EditProfile = () => {
  console.log('EditProfile');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlerFormSubmit = (event, userName, userEmail, password, avatarUrl) => {
    event.preventDefault();
    dispatch(fetchUpdateUserProfile({ username: userName, email: userEmail, password, image: avatarUrl }));
    console.log('form submit');
  };
  console.log('user in edit form', user);
  return <UserForm user={user} handlerFormSubmit={handlerFormSubmit} />;
};

export default EditProfile;
