import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOneBranch } from "../services/branchService";

interface BranchState {
  loading: boolean;
  error: string | null;
  message: string | null;
  isSuccess: boolean;
  branch: BranchType | null;
}

export interface BranchType {
  branchId: string;
  name: string;
  fullAddress: string | null;
  longitude: string | null;
  phone: string | null;
  latitude: string | null;
}

const initialStateBranch: BranchState = {
  message: null,
  loading: false,
  error: null,
  isSuccess: false,
  branch: null,
};

export const fetchOneBranch = createAsyncThunk(
  "branch/fetchOneBranch",
  async ({ branchId }: { branchId: string }, thunkAPI) => {
    try {
      const response = await getOneBranch(branchId);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getOneBranchSlice = createSlice({
  name: "getOneBranch",
  initialState: {
    ...initialStateBranch,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.branch = action.payload.branch;
      })
      .addCase(fetchOneBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default getOneBranchSlice.reducer;
