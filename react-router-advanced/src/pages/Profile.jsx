// src/pages/Profile.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <ul>
      <li><Link to="details">Profile Details</Link></li>
      <li><Link to="settings">Profile Settings</Link></li>
    </ul>
    <Outlet />
  </div>
);
export default Profile;
