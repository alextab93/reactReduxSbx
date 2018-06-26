import { createStore } from 'redux';
import { rootReducer } from './Reducers/IndexReducer';

export const store = createStore(rootReducer);