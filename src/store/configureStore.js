import { createStore } from 'redux';
import testReducer from '../components/sandbox/testReducer';

export function configureStore() {
    return createStore(testReducer)
}