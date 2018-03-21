import * as UserAPI from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS= "RECEIVE_SESSION_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";

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

const ReceiveErrors = errors =>(
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
);


export const LoginUser = (user)=> dispatch => (
    UserAPI.loginuser(user)
        .then((CurrentUser) => dispatch(ReceiveCurrentUser(CurrentUser))
            ,err => dispatch(ReceiveErrors(err.responseJSON)))
);


export const LogoutUser = () => dispatch =>(
    UserAPI.logoutuser()
      .then(() => dispatch(RemoveCurrentUser()),
          err => dispatch(ReceiveErrors(err.responseJSON)))
);

export const CreateUser = (user) =>dispatch =>(
    UserAPI.createuser(user)
        .then((currentuser) => dispatch(ReceiveCurrentUser(currentuser)),
        err => dispatch(ReceiveErrors(err.responseJSON)))
);

export const ClearError = () => dispatch =>(
    dispatch(ReceiveErrors([]))
);