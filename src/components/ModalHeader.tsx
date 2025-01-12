import React from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { MaximizeIcon } from './icons/MaximizeIcon';
import { MinimizeIcon } from './icons/MinimizeIcon';
export { default as useModalContext } from '../hooks/useModalContext';
import useModalContext from '../hooks/useModalContext';
import { ModalHeaderProps } from './types';

export function ModalHeader({
  children,
  defaultTitle = 'Modal Title',
  className = 'modal__header',
  ...props
}: ModalHeaderProps) {
  const { isClosable, isResizable, setOpen, open, isFullScreen, toggleScreen } = useModalContext();

  const handleClose = () => {
    if (isClosable && setOpen) {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div className={className} {...props}>
      {children}

      <div className="modal-controls">
        {isResizable && (
          <button
            onClick={toggleScreen}
            className="modal__controls"
            title={isFullScreen ? 'Minimize' : 'Maximize'}
          >
            {isFullScreen ? (
              <MinimizeIcon />
            ) : (
              <MaximizeIcon />
            )}
          </button>
        )}
        {isClosable && (
          <button
            onClick={handleClose}
            className="modal__controls"
            title="Close"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
}
