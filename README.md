# Tailwind Redux Modal
## A flexible and customizable modal component built with **Redux** for state management and **Tailwind CSS** for styling.

[![npm version](https://badge.fury.io/js/tailwind-redux-modal.svg)](https://www.npmjs.com/package/tailwind-redux-modal)
[![Build Status](https://travis-ci.org/your-repo/tailwind-redux-modal.svg?branch=main)](https://travis-ci.org/your-repo/tailwind-redux-modal)

## Installation

```sh
npm install tailwind-redux-modal
```

## Features

- **Redux-Based State Management**: Seamlessly integrates with your Redux store.
- **Customizable**: Modal is highly customizable.
- **Tailwind CSS Support**: Fully customizable with Tailwind CSS classes.
- **Flexible API**: Control modals using hooks like useModal and reusable components like Modal.Header, Modal.Body, etc.
- **Full-Screen** Modals: Easily toggle between full-screen and standard modal sizes.

## Usage

Place the **<ModalProvider />** at the root of your component tree, typically in the App component. This ensures that the modal state is accessible throughout your application.

```javascript
import React from 'react';
import { ModalProvider } from 'tailwind-redux-modal'

const App = () => {
  return (
    <Container>
      <ModalProvider />
      <Components />
    </Container>
  );
};

export default App;
```

After setting up the ModalProvider, you can use modals in your app like this

```javascript
import React from 'react';
import { Modal } from 'tailwind-redux-modal'

const ModalExample = () => {
  const { close } = useModal();
  return (
  
    <Modal>
      <Modal.Trigger>Open Modal</Modal.Trigger>
      <Modal.Content>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>Modal Body Content</Modal.Body>
        <Modal.Footer>
          <button onClick={close}>Close Modal</button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ModalExample;
```

## Example

```javascript
import React from 'react';
import { Modal } from 'tailwind-redux-modal'

export const ModalExample = () => {
  const { close, resize } = useModal()
  return (
    <Modal fullscreen {...props}>
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
            <button 
              onClick={close} 
              className="bg-blue-500 flex-1 max-w-[250px] text-white px-3 py-2 rounded-sm"
            >
                Close
            </button>
            <button 
              onClick={resize} 
              className="bg-blue-500 flex-1 max-w-[250px] text-white px-3 py-2 rounded-sm"
            >
                Resize
            </button>
          </div>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
```

## Modal Props

The `<Modal />` component accepts the following props:

### Props

| Prop           | Type                    | Description                                                       |
|----------------|-------------------------|-------------------------------------------------------------------|
| `open`         | `boolean`              | Determines if the modal is open.                                 |
| `onOpenChange` | `(nextOpen: boolean) => void` | Callback function triggered when the open state changes.          |
| `children`     | `React.ReactNode`      | The content to render inside the modal.                          |
| `open`          | `boolean`              | Controlled prop to manage the modal's open state.                |
| `fullscreen`    | `boolean`              | Enables full-screen mode for the modal.                          |
| `isResizable`   | `boolean`              | Allows resizing the modal if set to `true`.                      |
| `isClosable`    | `boolean`              | Enables closing the modal via a close button or other actions.   |



