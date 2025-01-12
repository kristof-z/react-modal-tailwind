import React from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import '../../globals.css';
import useModalContext from '../hooks/useModalContext';

export function ModalContent({ propRef, ...props }: any) {
  const { context: floatingContext, ...context } = useModalContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  if (!context.open) return null;
  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
      <div className="modal__backdrop">
        <div
          ref={ref}
          {...context.getFloatingProps(props)}
          className={`${context.isFullScreen ? 'modal__fullscreen' : 'modal__container'}`}
        >
        
          {props.children}
        </div>
      </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
