import { FloatingContext, UseFloatingReturn, useInteractions } from "@floating-ui/react";
import store from ".";

export interface ReduxInitialStateProps {
  open: boolean;
  component: React.ReactNode | null;
  isFullScreen?: boolean;
  isResizable?: boolean;
  isClosable?: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ReduxModalHookReturn {
  isOpen: boolean;
  component: React.ReactNode | null;
  isFullScreen?: boolean;
  isResizable?: boolean;
  isClosable?: boolean;
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
  toggleFullScreen: () => void;
  updateOptions: (options: { isResizable?: boolean; isClosable?: boolean }) => void;
  context: FloatingContext;
  refs: UseFloatingReturn['refs'];
  floatingStyles: UseFloatingReturn['floatingStyles'];
  update: UseFloatingReturn['update'];
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
}