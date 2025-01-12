import { useReduxDispatch, useReduxSelector } from "./useRedux";
import { close, open, resize } from "../store/slices";
import { ModalInterface } from "./types";
import React from "react";

export function useReduxModal(): ModalInterface {
  const dispatch = useReduxDispatch();
  const isFullScreen = useReduxSelector((state) => state.modal.isFullScreen);

  const closeModal = React.useCallback(() => {
    dispatch(close());
  }, [dispatch]);

  const openModal = React.useCallback(() => {
    dispatch(open());
  }, [dispatch]);

  const resizeModal = React.useCallback(
    (options?: { isFullScreen?: boolean }) => {
      dispatch(resize({ isFullScreen: options?.isFullScreen ?? !isFullScreen }));
    },
    [dispatch, isFullScreen]
  );

  return React.useMemo(() => ({
    close: closeModal,
    open: openModal,
    resize: resizeModal,
    isFullScreen
  }), [closeModal, resizeModal, isFullScreen]);
  
}
