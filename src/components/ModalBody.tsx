import React from 'react';
import { ModalBodyProps } from './types';

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
