import {RECEIVE_IMAGE_VIEW} from "../actions/Image_view_action";
import merge from 'lodash/merge'
import {RECEIVE_FOLLOW, REMOVE_FOLLOW} from "../actions/follow_action";
import {RECEIVE_IMAGE_ERROR} from "../actions/image_action";



const ImageViewReducer = (state={},action) => {
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_IMAGE_VIEW:
            return merge({},state,action.image);
        case RECEIVE_FOLLOW:
            newState= merge({},state);
            newState.follow = true;
            newState.number_followee = action.number_followee;
            return newState;
        case REMOVE_FOLLOW:
            newState = merge({},state);
            newState.follow = false;
            if (action.number_followee){
                newState.number_followee = action.number_followee;
            }else{
                newState.number_followee = 0
            }
            return newState;
        default:
            return state
    }
}


export default ImageViewReducer;