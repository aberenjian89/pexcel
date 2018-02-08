import {RECEIVE_FOLLOW,REMOVE_FOLLOW} from "../actions/follow_action";
import merge from 'lodash/merge'

const FollowReducer = (state={},action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_FOLLOW:
            debugger
            return merge({},state,action.follow);
        case REMOVE_FOLLOW:
            debugger
            return merge({},state,action.follow);
        default:
            return state;
    }
};


export default FollowReducer;