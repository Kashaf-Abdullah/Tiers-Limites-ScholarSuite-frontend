import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, adminElement }) => {
//   const userToken = localStorage.getItem('token');
//   const adminToken = localStorage.getItem('token-admin');

//   if (userToken) {
//     return element;
//   } else if (adminToken) {
//     return  <Navigate to="/login-admin" />;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default ProtectedRoute;
