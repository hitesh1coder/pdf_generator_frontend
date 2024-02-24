import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { productReducer } from "./slices/productSlice";

const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Define the root state type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
