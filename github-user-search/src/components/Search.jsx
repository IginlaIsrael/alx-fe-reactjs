import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleInputChange}
          className="p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="location"
          placeholder="Enter Location (optional)"
          value={location}
          onChange={handleInputChange}
          className="p-2 border rounded mb-2"
        />
        <input
          type="number"
          name="minRepos"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={handleInputChange}
          className="p-2 border rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData.length > 0 && (
        <div className="mt-4">
          {userData.map((user) => (
            <div key={user.id} className="flex items-center mt-4 border-b pb-2">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{user.login}</h2>
                <p>{user.location || 'No location provided'}</p>
                <p>{user.public_repos} repositories</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
