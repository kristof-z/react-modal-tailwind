import { useReduxDispatch, useReduxSelector } from './useRedux';
import { close, open, resize } from '../store/slices';
import React from 'react';

export function useReduxModal() {
  const dispatch = useReduxDispatch();
  const { open: isOpen, component, isFullScreen } = useReduxSelector((state) => state.modal);

  const closeModal = React.useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  const openModal = React.useCallback((component: React.ReactNode) => {
    dispatch(open(component));
  }, [dispatch]);

  const resizeModal = React.useCallback(
    (options?: { isFullScreen?: boolean }) => {
      dispatch(resize({ isFullScreen: options?.isFullScreen ?? !isFullScreen }));
    },
    [dispatch, isFullScreen]
  );

  return {
    openModal,
    closeModal,
    resizeModal,
    isOpen,
    isFullScreen,
    component,
  };
}
