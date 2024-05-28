import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerThunk = createAsyncThunk(
  "auth/register",

  async (formData, ThunkAPI) => {
    try {
      const authData = await requestRegister(formData);

      console.log("authData: ========>", authData);

        return authData; // action payload
        
    } catch (error) {

      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);
