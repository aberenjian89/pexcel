import {RECEIVE_IMAGE_AUTHOR} from '../actions/Image_view_action'
import merge from 'lodash/merge'


const ImageAuthorReducer = (state={},action) => {
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_IMAGE_AUTHOR:
            return merge({},state,action.author)
        default:
            return state
    }
}


export default ImageAuthorReducer;