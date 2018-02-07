import {RECEIVE_ALL_IMAGES, RECEIVE_IMAGE, RECEIVE_IMAGE_ERROR} from "../actions/image_action";


const _nullError = {
    errors: []
};

const ImageErrorReducer = (state = _nullError, action) =>{
    Object.freeze(action);
    let newState = Object.assign({}, state);
    switch (action.type){
        case RECEIVE_IMAGE_ERROR:
            newState.errors = action.error;
            return newState;
        case RECEIVE_ALL_IMAGES:
            return _nullError;
        case RECEIVE_IMAGE:
            return _nullError;
        default:
            return state;
    }
};


export default ImageErrorReducer;