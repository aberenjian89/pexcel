import {combineReducers} from 'redux'
import SessionReducer from './session_reducer'

const RootReducer =combineReducers({
    Session: SessionReducer
});


export default RootReducer;