import { useClick, useFloating, useInteractions, useRole } from '@floating-ui/react';
import { useReduxDispatch, useReduxSelector } from './useRedux';
import { close, open, resize, setOptions } from '../store/slices';
import React from 'react';
import { ReduxModalHookReturn } from '../store/types';

export function useReduxModal(): ReduxModalHookReturn {
  const dispatch = useReduxDispatch();
  const {
    open: isOpen,
    component,
    isFullScreen,
    isResizable,
    isClosable,
  } = useReduxSelector((state) => state.modal);

  const closeModal = React.useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  const openModal = React.useCallback((component: React.ReactNode) => {
    dispatch(open(component));
  }, [dispatch]);

  const toggleFullScreen = React.useCallback(() => {
    dispatch(resize({ isFullScreen: !isFullScreen }));
  }, [dispatch, isFullScreen]);

  const updateOptions = (options: { isResizable?: boolean; isClosable?: boolean }) => {
    dispatch(setOptions(options));
  };

  const { refs, context, ...floatingData } = useFloating({
    open: isOpen,
    onOpenChange: (open: boolean) => (open ? openModal(component) : closeModal()),  
  });

  const click = useClick(context);
  const role = useRole(context);
  const interactions = useInteractions([click, role]);

  return {
    isOpen,
    component,
    isFullScreen,
    isResizable,
    isClosable,
    openModal,
    closeModal,
    toggleFullScreen,
    updateOptions,
    context,
    refs,
    ...floatingData,
    ...interactions,
  };
}