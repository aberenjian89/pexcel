import {RECEIVE_IMAGE_VIEW} from "../actions/Image_view_action";
import merge from 'lodash/merge'



const ImageViewReducer = (state={},action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_IMAGE_VIEW:
            return merge({},state,action.image)
        default:
            return state
    }
}


export default ImageViewReducer;