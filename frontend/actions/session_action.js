import * as UserAPI from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

const ReceiveCurrentUser = (user) => (
    {
        type: RECEIVE_CURRENT_USER,
        user
    }
);

const RemoveCurrentUser = () =>(
    {
        type: REMOVE_CURRENT_USER,
    }
);


export const LoginUser = (user)=> dispatch => (
    UserAPI.loginuser(user)
        .then((CurrentUser) => dispatch(ReceiveCurrentUser(CurrentUser)))
);


export const LogoutUser = () => dispatch =>(
    UserAPI.logoutuser()
      .then(() => dispatch(RemoveCurrentUser()))
);

export const CreateUser = (user) =>dispatch =>(
    UserAPI.createuser(user).then((currentuser) => dispatch(ReceiveCurrentUser(currentuser)))
);

