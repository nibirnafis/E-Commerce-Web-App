import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice'; 

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
} 

/* export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; */


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']