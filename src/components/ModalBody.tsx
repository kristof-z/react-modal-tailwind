import React from 'react';
import { ModalBodyProps } from './types';
export { default as useModalContext } from '../hooks/useModalContext';

export function ModalBody({
  className = 'modal__body',
  ...props
}: ModalBodyProps) {

   return (
    <div className={className} {...props}>
      {props.children}
    </div>
  );
}
