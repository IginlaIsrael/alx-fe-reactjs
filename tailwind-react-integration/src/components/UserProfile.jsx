import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-xs sm:max-w-sm mx-auto p-4 sm:p-8">
      <img 
        src={user.profileImage} 
        alt={`${user.name}'s profile`} 
        className="w-24 h-24 sm:w-36 sm:h-36 mx-auto rounded-full" 
      />
      <h2 className="text-lg sm:text-xl text-center mt-4">{user.name}</h2>
      <p className="text-sm sm:text-base text-center mt-2">{user.bio}</p>
    </div>
  );
};

export default UserProfile;
