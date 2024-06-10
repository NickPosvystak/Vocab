import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getUsers,
  requestLogin,
  requestLogout,
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
      return ThunkAPI.rejectWithValue('Please Login');
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

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, ThunkAPI) => {
    try {
      await requestLogout();

      return;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
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

      //REGISTER USER------------------------------

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      // LOGIN-------------------------------------

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })

      //REFRESH---------------------------------------

      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })

      //LOGOUT--------------------------------------

      .addCase(logOutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })

      // PENDING & REJECT

      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
