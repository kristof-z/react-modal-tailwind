import React from 'react';
import { ModalFooterProps } from './types';

export function ModalFooter({
  className = 'modal__footer',
  ...props
}: ModalFooterProps) {

   return (
    <div className={className} {...props}>
      {props.children}
    </div>
  );
}
