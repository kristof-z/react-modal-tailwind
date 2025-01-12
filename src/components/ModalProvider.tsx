import * as React from 'react';
import { useReduxDispatch, useReduxSelector } from '../hooks/useRedux';
import { close } from '../store/slices';
import { Modal } from '.';

export function ModalProvider(): React.JSX.Element | null {
  const isOpen: boolean = useReduxSelector(state => state.modal.open);
  const component: React.ReactNode = useReduxSelector(state => state.modal.component);
  const dispatch = useReduxDispatch();

  return (
    <Modal
      open={isOpen}
      onOpenChange={() => {
        dispatch(close());
      }}
    >
      {React.isValidElement(component) ? component : null}
    </Modal>
  );
}
