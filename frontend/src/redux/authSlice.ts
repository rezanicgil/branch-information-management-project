import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../services/authService";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  message: string | null;

}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  message: null,
  token: null,
  loading: false,
  error: null,
};

// Function to load token from localStorage
const loadToken = (): string | null => {
  return localStorage.getItem('token');
};

// Load token on app initialization
const token = loadToken();

export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await loginService(email, password).then();
      if (!response.token) return thunkAPI.rejectWithValue(response.message);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    ...initialState,
    token: token,
    isAuthenticated: !!token,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token); 
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
