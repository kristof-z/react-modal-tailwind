import * as React from 'react';
import { ContextType } from './types';

const ModalContext = React.createContext<ContextType>(null);

export default ModalContext;
