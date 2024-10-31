import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, isCheckingAuth }) => {

  if (isCheckingAuth) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se verifica el token
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;