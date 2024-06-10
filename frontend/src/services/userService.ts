import axios from "axios";
import { UserType } from "../redux/userSlice";

const API_URL = "http://localhost:6868/api";

interface GetUserResponse {
  user: UserType;
  token: string;
  status:number;
  error: string;
  message: string;
}

export const getUser = async (): Promise<GetUserResponse> => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/user/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
