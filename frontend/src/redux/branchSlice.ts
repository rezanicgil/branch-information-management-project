import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBranches } from "../services/branchService";

interface BranchState {
  loading: boolean;
  error: string | null;
  message: string | null;
  isSuccess: boolean;
  branches: BranchType[] | null;
}

export interface BranchType {
  branchId: string;
  name: string;
  fullAddress: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
}


const initialStateBranch: BranchState = {
  message: null,
  loading: false,
  error: null,
  isSuccess: false,
  branches: [],
};


export const fetchBranches = createAsyncThunk("branch/fetchBranches", async (_, thunkAPI) => {
  try {
    const response = await getBranches();
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const branchSlice = createSlice({
  name: 'branches',
  initialState: {
    ...initialStateBranch
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBranches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.loading = false;
        state.branches = action.payload.branches;
      })
      .addCase(fetchBranches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default branchSlice.reducer;
