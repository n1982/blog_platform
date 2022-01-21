import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../components/UserForm';
// eslint-disable-next-line no-unused-vars
import { fetchUpdateUserProfile } from '../store/userSlice';

const EditProfile = () => {
  console.log('EditProfile');
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handlerFormSubmit = (data) => {
    // dispatch(fetchUpdateUserProfile({ username: userName, email, password, image: avatarUrl }));
    console.log('edit form data', data);
  };

  return <UserForm user={user} handlerFormSubmit={handlerFormSubmit} />;
};

export default EditProfile;
