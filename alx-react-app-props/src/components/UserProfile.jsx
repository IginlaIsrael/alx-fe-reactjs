import React, { useContext } from 'react';
import UserContext from './UserContext';  // Adjust the path if needed

function UserProfile() {
  // Consume the user data from context
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>Unknown</span></p> {/* Add age if available */}
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
