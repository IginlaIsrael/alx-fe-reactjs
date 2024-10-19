import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  let query = `q=${username}`;
  
  // Add location filter if provided
  if (location) {
    query += `+location:${location}`;
  }

  // Add minimum repositories filter if provided
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?${query}`);
  return response.data.items; // Adjust based on the API response structure
};

export { fetchUserData };
