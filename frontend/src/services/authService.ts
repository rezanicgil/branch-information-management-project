import axios from 'axios';

const API_URL = 'http://localhost:6868/api'; // Replace with your API URL

interface LoginResponse {
  token: string;
  user: string;
  message: string;
}

export const loginService = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/user/signin`, { email, password });
  return response.data;
};