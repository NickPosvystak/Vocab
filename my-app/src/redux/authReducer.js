import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getUsers,
  requestLogin,
  requestRefreshUser,
  requestRegister,
  setToken,
} from "../services/apiContacts";

//! THUNK

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (formData, ThunkAPI) => {
    try {
      const authData = await requestRegister(formData);

      console.log("registerThunk", authData);

      return authData; // action payload
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  "auth/login",

  async (formData, ThunkAPI) => {
    try {
      const response = await requestLogin(formData);

      console.log("LoginThunk", response);

      return response; // action payload
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",

  async (_, ThunkAPI) => {
    const state = ThunkAPI.getState();
    const token = state.auth.token;

    try {
      setToken(token);

      const authData = await requestRefreshUser();

      console.log("refreshThunk", authData);

      return authData; // action payload
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, ThunkAPI) => {
      const state = ThunkAPI.getState();
      const token = state.auth.token;

      if (!token) return false;
      return true;
    },
  }
);

export const allUsersThunk = createAsyncThunk(
  "users",

  async (formData, ThunkAPI) => {
    try {
      const userData = await getUsers(formData);

      console.log("THUNK data: ========>", userData);

      return userData; // action payload
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      //REGISTER USER
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ALL
      .addCase(allUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(allUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(allUsersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
