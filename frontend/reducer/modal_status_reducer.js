import merge from 'lodash/merge'


const ModalStatusReducer = (state={},action)=>{
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