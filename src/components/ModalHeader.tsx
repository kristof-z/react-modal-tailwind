import React from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { MaximizeIcon } from './icons/MaximizeIcon';
import { MinimizeIcon } from './icons/MinimizeIcon';
import { ModalHeaderProps } from './types';
import { useReduxModal } from '../hooks/useReduxModal';

export function ModalHeader({
  children,
  defaultTitle = 'Modal Title',
  className = 'modal__header',
  ...props
}: ModalHeaderProps) {
  const { closeModal, toggleFullScreen, isClosable, isResizable, isFullScreen } = useReduxModal();

  const handleClose = () => {
    if (isClosable) {
      closeModal();
    }
  };

  if (!open) return null;

  return (
    <div className={className} {...props}>
      {children}

      <div className="modal-controls">
        {isResizable && (
          <button
            onClick={toggleFullScreen}
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
