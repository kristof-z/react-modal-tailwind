import React from 'react';
import { Provider } from 'react-redux';
import { ModalProps } from './types';
import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalComponent } from './ModalComponent';
import store from '@/store';

export function Modal({
  children,
  ...props
}: ModalProps) {
  return (
    <Provider store={store}>
      <ModalComponent {...props}>
        {children}
      </ModalComponent>
    </Provider>
  );
}

Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;


