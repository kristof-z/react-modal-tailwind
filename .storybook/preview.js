import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/index';
import { ModalProvider } from './../src/index'
import '../dist/globals.css'; 

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />

    </Provider>
  ),
];