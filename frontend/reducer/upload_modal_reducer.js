import merge from 'lodash/merge'

const _initialstate = {
    open: null,
}


const UploadModalReducer = (state = _initialstate,action)=>{
    Object.freeze(state);

    switch (action.type){
        case "UPLOAD_MODAL_SHOW":
            return merge({},state,{open: true});
        case "UPLOAD_MODAL_HIDE":
            return merge({},state,{open: false});
        default:
            return state
    }
}

export default UploadModalReducer