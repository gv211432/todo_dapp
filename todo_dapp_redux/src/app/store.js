import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import globalReducer from '../features/state/gobalState';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    global: globalReducer,
  },
});
