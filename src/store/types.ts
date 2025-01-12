import store from ".";

export interface ReduxInitialStateProps {
  open: boolean;
  component: React.ReactNode | null;
  isFullScreen?: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;