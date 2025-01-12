import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/types';

export const useReduxDispatch = () => useDispatch();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
