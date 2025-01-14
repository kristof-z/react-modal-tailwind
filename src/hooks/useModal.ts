/* import * as React from 'react';
import { useFloating, useClick, useRole, useInteractions } from '@floating-ui/react';
import { ModalOptions } from '../components/types';
import { useReduxDispatch, useReduxSelector } from './useRedux';
import { open as openAction, close as closeAction, resize as resizeAction } from '../store/slices';

export function useModal({
  open: controlledOpen,
  onOpenChange,
  isClosable = true,
  isResizable = true,
}: ModalOptions = {}) {
  const reduxOpen = useReduxSelector((state) => state.modal.open);
  const isFullScreen = useReduxSelector((state) => state.modal.isFullScreen);
  const dispatch = useReduxDispatch();

  const open = controlledOpen ?? reduxOpen;

  const setOpen = (nextOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
    dispatch(nextOpen ? openAction(null) : closeAction());
  };

  const toggleScreen = React.useCallback(() => {
    dispatch(resizeAction({ isFullScreen: !isFullScreen }));
  }, [dispatch, isFullScreen]);

  const { refs, context, ...floatingData } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const interactions = useInteractions([click, role]);

  return {
    refs,
    context,
    ...floatingData,
    ...interactions,
    open,
    setOpen,
    isFullScreen,
    toggleScreen,
    isClosable,
    isResizable,
  };
}
 */

export default {}