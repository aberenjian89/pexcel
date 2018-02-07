import {RECEIVE_ALL_IMAGES,RECEIVE_IMAGE,REMOVE_IMAGE} from "../actions/image_action";
import merge from 'lodash/merge'

const ImageReducer = (state={},action)=>{
    Object.freeze(state);

    switch (action.type){
        case RECEIVE_ALL_IMAGES:
            return action.images;
        case RECEIVE_IMAGE:
            return merge({},state,{[action.image.id]: action.image});
        case REMOVE_IMAGE:
            let newState = merge({},state);
            delete newState[action.imgId];
            return newState;
        default:
            return state;
    }
};

export default ImageReducer;