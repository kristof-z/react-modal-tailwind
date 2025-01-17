import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxInitialStateProps } from './types';

export const initialState: ReduxInitialStateProps = {
  open: false,
  component: null,
  isFullScreen: false,
  isResizable: true,
  isClosable: true
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
      } else {
        state.isFullScreen = !state.isFullScreen;
      }
    },
    setOptions(
      state,
      action: PayloadAction<{ isResizable?: boolean; isClosable?: boolean }>
    ) {
      if (action.payload.isResizable !== undefined) {
        state.isResizable = action.payload.isResizable;
      }
      if (action.payload.isClosable !== undefined) {
        state.isClosable = action.payload.isClosable;
      }
    },
  },
});

export const { open, close, resize, setOptions } = slice.actions;
export const modalReducer = slice.reducer;
