import { combineReducers } from 'redux';
import testReducer from '../components/sandbox/testReducer';
import boardReducer from '../actions/boardReducer';

const rootReducer = combineReducers({
    test: testReducer,
    wishboard: boardReducer
})

export default rootReducer;