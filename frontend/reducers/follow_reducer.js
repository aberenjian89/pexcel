import {RECEIVE_FOLLOW,REMOVE_FOLLOW} from "../actions/follow_action";


const FollowReducer = (state={},action) => {
    Object.freeze(state);
    switch (action.type){

        case RECEIVE_FOLLOW:
            return action.follow;
        case REMOVE_FOLLOW:
            return {};
        default:
            return state;
    }
};


export default FollowReducer;