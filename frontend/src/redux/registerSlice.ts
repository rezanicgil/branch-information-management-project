import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerService } from "../services/authService";

interface RegisterState {
  loading: boolean;
  error: string[] | null;
  message: string | null;
  isSuccess: boolean;
}

const initialStateRegister: RegisterState = {
  message: null,
  loading: false,
  error: null,
  isSuccess: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      role,
      firstName,
      lastName,
    }: {
      email: string;
      password: string;
      role: string;
      firstName: string;
      lastName: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await registerService(
        email,
        password,
        role,
        firstName,
        lastName
      );

      console.log(response.status);
      if (response.status !== 201) return thunkAPI.rejectWithValue(response.error);

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const registerSlice = createSlice({
  name: "register",
  initialState: {
    ...initialStateRegister,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string[];
        state.isSuccess = false
      });
  },
});

export default registerSlice.reducer;
