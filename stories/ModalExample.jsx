import React from 'react';
import { useModal, Modal } from '../src/index';
export const ModalExample = () => {
  const { closeModal, toggleFullScreen } = useModal()
  return (
    <Modal fullscreen>
      <Modal.Trigger className="bg-blue-500 text-white p-3 rounded-sm">
        Modal Trigger
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <h3 className='w-full text-center'>Modal Header</h3>
        </Modal.Header>
        <Modal.Body className='w-full text-center py-10'>
          <h3>Modal body</h3>
        </Modal.Body>
        <Modal.Footer>
          <div className='w-full justify-center flex gap-3'>
            <button onClick={closeModal} className="bg-blue-500 flex-1 max-w-[250px] text-white px-3 py-2 rounded-sm">Close</button>
            <button onClick={toggleFullScreen} className="bg-blue-500 flex-1 max-w-[250px] text-white px-3 py-2 rounded-sm">Resize</button>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
