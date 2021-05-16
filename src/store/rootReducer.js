import { combineReducers } from 'redux';
import boardReducer from '../actions/boardReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
    wishboard: boardReducer,
    async: asyncReducer
})

export default rootReducer;