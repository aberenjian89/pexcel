import {RECEIVE_IMAGE_VIEW_ERROR,RECEIVE_IMAGE_VIEW} from "../actions/Image_view_action";

const _initialState={
    error:[]
};


const ImageViewErrorReducer = (state= _initialState,action)=>{
    Object.freeze(state)
    switch (action.type){
        case RECEIVE_IMAGE_VIEW:
            return _initialState;
        case RECEIVE_IMAGE_VIEW_ERROR:
            return action.error;
        default:
            return state;
    }
};


export default ImageViewErrorReducer;