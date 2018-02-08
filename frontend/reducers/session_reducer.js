import {RECEIVE_CURRENT_USER
    ,REMOVE_CURRENT_USER} from '../actions/session_action';
import merge from 'lodash/merge'


const __initialstate={
    CurrentUser: null
};


const SessionReducer=(state=__initialstate,action)=>{
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            debugger
           return merge({},{CurrentUser: action.user});
        case REMOVE_CURRENT_USER:
           return __initialstate;
        default:
            return state;
    }
};

export default SessionReducer;



