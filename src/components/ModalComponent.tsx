import { useEffect } from 'react';
import { useReduxModal } from '../hooks/useReduxModal';
import { ModalProps } from './types';

export function ModalComponent({
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

  return children
  ;
}


