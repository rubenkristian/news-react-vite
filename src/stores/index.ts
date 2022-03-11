import { createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { reducers } from './reducer';

export const stores = createStore(reducers, composeWithDevTools())