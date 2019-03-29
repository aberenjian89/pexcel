import {combineReducers} from 'redux'
import SessionReducer from './session_reducer'
import ModalStatusReducer from './modal_status_reducer'

const RootReducer =combineReducers({
    Session: SessionReducer,
    ModalStatus: ModalStatusReducer
});


export default RootReducer;