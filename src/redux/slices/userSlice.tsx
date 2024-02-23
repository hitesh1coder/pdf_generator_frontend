import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface UserState {
  loading: boolean;
  loggedIn: boolean;
  user: UserData | null;
  error: string | null;
}
interface UserData {
  id?: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: UserState = {
  loading: false,
  loggedIn: false,
  user: JSON.parse(localStorage.getItem("pdf-user") as string) || null,
  error: null,
};

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (
    userData: {
      fullName: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/signup`,
        userData
      );

      const result = await response.data;
      return result;
    } catch (error: any) {
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }
);

// Define an asynchronous thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
        userData
      );
      const res = await response.data;

      return res;
    } catch (error: any) {
      // Use AxiosError to provide type information about the error object
      return rejectWithValue((error as AxiosError)?.response?.data?.error);
    }
  }
);

// Create a slice for the user state
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        signupUser.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.loggedIn = true;
          state.user = action.payload;
          toast.success("User Registered successfully,Please Login");
          state.error = null;
        }
      )
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.loggedIn = true;
          state.user = action.payload;
          console.log(action.payload);
          localStorage.setItem("pdf-user", JSON.stringify(action.payload));
          toast.success("User Logged In successfully");
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error(state.error);
      });
  },
});

// Export the reducer
export const userReducer = userSlice.reducer;
