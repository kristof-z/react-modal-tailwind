import * as React from 'react';
import ModalContext from '../components/ModalContext';

const useModalContext = (options: { onClose?: () => Promise<void> | void; onOpen?: () => Promise<void> | void } = { onClose: undefined, onOpen: undefined }) => {
  const context = React.useContext(ModalContext);

  const { onOpen, onClose } = options;

  const onOpenCallback = React.useCallback(async () => {
    await onOpen?.();
  }, [onOpen]);

  const onCloseCallback = React.useCallback(async () => {
    await onClose?.();
  }, [onClose]);

  React.useEffect(() => {
    if (context?.open) {
      onOpenCallback();
      return () => undefined;
    }
  }, [context?.open]);

  React.useEffect(() => {
    if (context && !context.open) {
      onCloseCallback();
      return () => undefined;
    }
  }, [context?.open]);

  if (context === null) {
    throw new Error('Dialog components must be wrapped in <Dialog />');
  }

  context.onClose = onClose || context.onClose;
  context.onOpen = onOpen || context.onOpen;

  return context;

};

export default useModalContext;
