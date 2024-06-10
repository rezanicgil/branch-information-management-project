import axios from "axios";

const API_URL = "http://localhost:6868/api";

interface LoginResponse {
  token: string;
  user: any;
  message: string;
  status: number;
}

interface RegisterResponse {
  status: number;
  message: string;
  error: string[];
}

export const loginService = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post(`${API_URL}/user/signin`, {
    email,
    password,
  });
  return response.data;
};

export const registerService = async (
  email: string,
  password: string,
  role: string,
  firstName: string,
  lastName: string
): Promise<RegisterResponse> => {
  const response = await axios.post(`${API_URL}/user/signup`, {
    email,
    password,
    role,
    firstName,
    lastName,
  });
  return response.data;
};

