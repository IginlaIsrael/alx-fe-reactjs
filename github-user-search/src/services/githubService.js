import axios from 'axios';

// Function to fetch GitHub user data with advanced search filters
export const fetchAdvancedUserData = async (searchParams) => {
  const { username, location, repos } = searchParams;

  // Construct the search query for advanced search
  let query = `q=${username ? username : ''}`;

  // Add additional search criteria
  if (location) {
    query += `+location:${location}`;
  }
  if (repos) {
    query += `+repos:>=${repos}`;
  }

  // GitHub search users API URL
  const apiUrl = `https://api.github.com/search/users?${query}`;

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
