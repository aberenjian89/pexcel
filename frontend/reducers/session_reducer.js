import {RECEIVE_CURRENT_USER
    ,REMOVE_CURRENT_USER} from '../actions/session_action';
import {REMOVE_FOLLOW,RECEIVE_FOLLOW} from "../actions/follow_action";
import merge from 'lodash/merge'


const __initialstate={
    CurrentUser: null
};


const SessionReducer=(state=__initialstate,action)=>{
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_CURRENT_USER:
           return merge({},{CurrentUser: action.user});
        case RECEIVE_FOLLOW:

            return state;
        case REMOVE_FOLLOW:
            return state;
        case REMOVE_CURRENT_USER:
           return __initialstate;
        default:
            return state;
    }
};

export default SessionReducer;



