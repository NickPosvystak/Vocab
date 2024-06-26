import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authReducer";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
});

// STORE
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
