import * as React from 'react';
import { useModal } from "../hooks/useModal";
import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import '../../globals.css';
import { ModalProps } from './types';
import { ModalHeader } from './ModalHeader';
import ModalContext from './ModalContext';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

export function Modal(props: ModalProps) {
  const modalValue = useModal(props);
  return (
    <ModalContext.Provider value={modalValue}>
      {props.children}
    </ModalContext.Provider>
  );
}

Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

