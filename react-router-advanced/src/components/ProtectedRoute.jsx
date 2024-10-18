// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Simulate authentication status
  return localStorage.getItem('auth') === 'true';
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
