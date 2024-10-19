const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

