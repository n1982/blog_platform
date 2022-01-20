import { useLocation, Navigate } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.user.email);
  if (!auth) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
