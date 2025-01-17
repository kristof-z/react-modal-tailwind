import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
