import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../services/userService";

interface UserState {
  loading: boolean;
  error: string | null;
  message: string | null;
  isSuccess: boolean;
  role: string | null;
  user: UserType | null;
}

export interface UserType {
  email: string;
  firstName: string;
  lastName: string;
  role: string | null;
}

const initialStateUser: UserState = {
  message: null,
  loading: false,
  error: null,
  isSuccess: false,
  role: null,
  user: null,
};

// Function to load token from localStorage
const loadUserRole = (): string | null => {
  return localStorage.getItem("userRole");
};

// Load token on app initialization
const userRole = loadUserRole();

export const userThunk = createAsyncThunk("auth/user", async (_, thunkAPI) => {
  try {
    const response = await getUser();
    return response;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...initialStateUser,
    role: userRole
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(userThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        if (action.payload.user.role)
          localStorage.setItem("userRole", action.payload.user.role);
      })
      .addCase(userThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export default userSlice.reducer;
