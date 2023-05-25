import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
  reducer: {},
});

composeWithDevTools();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
