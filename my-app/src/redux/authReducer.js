import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestRegister } from "../services/apiContacts";

//! THUNK

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (formData, ThunkAPI) => {
    try {
      const authData = await requestRegister(formData);

      console.log("authData from  registerThunk: ========>", authData);

      return authData; // action payload
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
  name: "auTH",
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
      }),
});

export const authReducer = authSlice.reducer