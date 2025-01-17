import React from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { useReduxModal } from '../hooks/useReduxModal';

export function ModalContent({ propRef, ...props }: any) {
  const {
    isOpen,
    component,
    isFullScreen,
    context: floatingContext,
  } = useReduxModal();
  
  const ref = useMergeRefs([propRef]);

  if (!isOpen) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <div className="modal__backdrop">
          <div
            ref={ref}
            className={`${isFullScreen ? 'modal__fullscreen' : 'modal__container'}`}
          >
            {component || props.children}
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}