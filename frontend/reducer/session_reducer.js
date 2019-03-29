import merge from 'lodash/merge'


const _initialestate = {
    current_user: null
}



const SessionReducer = (state = _initialestate,action)=>{
    Object.freeze(state);

    switch (action.type){
        case "LOGIN_USER":
            return merge({},{current_user: action.data});
        case "UPDATE_USER":
            return merge({},state,{current_user: action.data});
        case "LOGOUT_USER":
            return _initialestate;
        default:
            return state
    }
};


export default SessionReducer