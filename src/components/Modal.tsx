import * as React from 'react';
import { ModalContent } from './ModalContent';
import { ModalTrigger } from './ModalTrigger';
import '../../globals.css';
import { ModalProps } from './types';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

export function Modal(props: ModalProps) {
  return props.children
}

Modal.Content = ModalContent;
Modal.Trigger = ModalTrigger;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

