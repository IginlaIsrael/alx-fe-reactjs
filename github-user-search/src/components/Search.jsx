import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the service function

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setError(null); // Reset error state
    setUserData(null); // Reset user data state

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          className="p-2 border rounded mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt={userData.login} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-bold">{userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
