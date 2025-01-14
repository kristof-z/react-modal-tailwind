import { useEffect } from 'react';
import { useReduxModal } from '../hooks/useReduxModal';
import { ModalProps } from './types';
import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import '../../globals.css';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

export function Modal({
  initialOpen = false,
  fullscreen = false,
  isResizable = true,
  isClosable = true,
  children,
}: ModalProps) {
  const { openModal, closeModal, updateOptions, toggleFullScreen } = useReduxModal();

  useEffect(() => {
    // Update options in Redux state
    updateOptions({ isResizable, isClosable });
  }, [initialOpen, fullscreen, isResizable, isClosable, openModal, closeModal, updateOptions, toggleFullScreen, children]);

  return children;
}

Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;