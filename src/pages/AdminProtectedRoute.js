import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token-admin');
  return token ? element : <Navigate to="/login-admin" />;
};

export default AdminProtectedRoute;
