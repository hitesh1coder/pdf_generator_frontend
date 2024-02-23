import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

// Combine reducers if you have multiple slices
// import { combineReducers } from 'redux';

// Combine reducers if needed
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the Redux store
export const store = configureStore({
  reducer: {
    rootReducer, // Root reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
