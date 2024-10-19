import axios from 'axios';

// Function to fetch GitHub user data with advanced search filters
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  // Construct the search query
  let query = `q=${username ? username : ''}`;

  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repos:>=${minRepos}`; // Add minimum repository count filter
  }

  // Full GitHub API URL for the advanced user search
  const apiUrl = `https://api.github.com/search/users?q=${query}`;

  try {
    // Make a GET request to the GitHub API
    const response = await axios.get(apiUrl);
    
    // Return the search results
    return response.data;
  } catch (error) {
    console.error('Error fetching advanced user data:', error);
    throw error;
  }
};
