import { createSelector } from "@reduxjs/toolkit";

const selectAuth = (state) => state.auth;

export const selectAuthAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.authenticated
);
export const selectUser = createSelector(selectAuth, (auth) => auth.user.name);
