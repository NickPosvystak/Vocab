import { createAsyncThunk } from "@reduxjs/toolkit";
import DATA from "../data";

export const fetchAllWords = createAsyncThunk("/words", async (_, thunkApi) => {
  try {
    const result = DATA; //!DATA is incorrect??
    console.log("===>", result);
    return result;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
