import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useReduxModal } from '../hooks/useReduxModal';
import { ModalProps } from './types';
import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import store from 'store';

export function Modal({
  initialOpen = false,
  fullscreen = false,
  isResizable = true,
  isClosable = true,
  children,
}: ModalProps) {
  const { openModal, closeModal, updateOptions, toggleFullScreen } = useReduxModal();

  useEffect(() => {
    updateOptions({ isResizable, isClosable });
  }, [initialOpen, fullscreen, isResizable, isClosable, openModal, closeModal, updateOptions, toggleFullScreen, children]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
  
  ;
}

Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;