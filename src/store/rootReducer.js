import { combineReducers } from 'redux';
import testReducer from '../components/sandbox/testReducer';
import boardReducer from '../actions/boardReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    test: testReducer,
    wishboard: boardReducer,
    async: asyncReducer
})

export default rootReducer;