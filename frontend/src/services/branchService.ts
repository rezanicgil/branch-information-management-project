import axios from "axios";
import { BranchType } from "../redux/branchSlice";

const API_URL = "http://localhost:6868/api";

interface GetBranchesResponse {
  branches: BranchType[];
  token: string;
  status: number;
  error: string;
  message: string;
}

interface GetOneBranchResponse {
  branch: BranchType;
  token: string;
  status: number;
  error: string;
  message: string;
}

interface CreateBranchResponse {
  status: number;
  error: string;
  message: string;
}

export const getBranches = async (): Promise<GetBranchesResponse> => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/branch`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getOneBranch = async (
  branchId: string
): Promise<GetOneBranchResponse> => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/branch/${branchId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createNewBranch = async (
  name: string,
  longitude: string,
  latitude: string,
  fullAddress: string,
  phone: string
): Promise<CreateBranchResponse> => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${API_URL}/branch`,
    { name, longitude, latitude, phone, fullAddress },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
