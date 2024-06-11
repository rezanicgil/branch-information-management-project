import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createNewBranch } from "../services/branchService";

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

export const createBranch = createAsyncThunk(
  "branch/createBranch",
  async (
    {
      name,
      longitude,
      latitude,
      phone,
      fullAddress,
    }: {
      name: string;
      longitude: string;
      latitude: string;
      phone: string;
      fullAddress: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await createNewBranch(
        name,
        longitude,
        latitude,
        fullAddress,
        phone
      );

      if (response.status !== 201) return thunkAPI.rejectWithValue(response.error);

      return response;
    } catch (error: any) {
      let errorMessage = "Failed to create branch";
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.error;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const createBranchSlice = createSlice({
  name: "createOneBranch",
  initialState: {
    ...initialStateBranch,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBranch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
      })
      .addCase(createBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export default createBranchSlice.reducer;
