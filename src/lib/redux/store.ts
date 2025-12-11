// lib/redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
// Import your root reducer (or combine them if you have multiple slices)
import userReducer from './features/userSlice'; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other slices/reducers here
  },
  // Add middleware/dev tools configuration if needed
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Note: You must export the store instance itself.