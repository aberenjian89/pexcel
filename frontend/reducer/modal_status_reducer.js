import merge from 'lodash/merge'

const _initialState = {
    status: false,
    type: null
}

const ModalStatusReducer = (state=_initialState,action)=>{
    Object.freeze(state)
    switch (action.type){
        case "MODAL_SHOW":
            return merge({},state,action.data)
        case "MODAL_HIDE":
            return merge({},state,action.data)
        default:
            return state
    }
}

export default ModalStatusReducer