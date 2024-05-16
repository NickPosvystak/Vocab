import { createSlice } from "@reduxjs/toolkit";
import { fetchAllWords } from "./operations";

const INITIAL_STATE = {
  words: [],
  loading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: "words",
  initialState: INITIAL_STATE,
   reducers: {
    filterWords(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllWords.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllWords.fulfilled, (state, action) => {
        state.loading = false;
        state.words = action.payload;
      })
      .addCase(fetchAllWords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
export const { filterWords } = wordsSlice.actions;
