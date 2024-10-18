// src/pages/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  return <h1>Profile of User {userId}</h1>;
};

export default UserProfile;
