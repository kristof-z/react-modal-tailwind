import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxInitialStateProps } from './types';

export const initialState: ReduxInitialStateProps = {
  open: false,
  component: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open(state, action: PayloadAction<React.ReactNode>) {
      state.open = true;
      state.component = action.payload;
    },
    close(state) {
      state.open = false;
      state.component = null;
    },
    resize(state, action: PayloadAction<{ isFullScreen?: boolean }>) {
      if (action.payload.isFullScreen !== undefined) {
        state.isFullScreen = action.payload.isFullScreen;
      }
    },
  },
});

export const { open, close, resize } = slice.actions;
export default slice.reducer;