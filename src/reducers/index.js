import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import TarefasReducer from './TarefasReducer';


export default combineReducers({
	UserReducer,
    TarefasReducer
});
