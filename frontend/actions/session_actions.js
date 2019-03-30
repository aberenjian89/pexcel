import {LoginHomeUser,RegisterNewUser,LogOutHomeUser} from "../components/auth_component/AuthAPI";

export const LOGIN_USER = "LOGIN_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_CLEAR_ERROR = "AUTH_CLEAR_ERROR";



export const LoginUser = (user) => ({
    type: LOGIN_USER,
    data: user
});

export const RegisterUser = (user)=>({
    type: REGISTER_USER,
    data: user
})

export const UpdateUser = (user) => ({
    type: LOGOUT_USER,
    data: user
});

export const LogOutUser = () => ({
    type: LOGOUT_USER,
});

export const AuthError = (err) => ({
    type: AUTH_ERROR,
    data: err
});

export const AuthClearError = () => ({
    type: AUTH_CLEAR_ERROR
});


export const APIUserLogin = (data) => dispatch => (
    LoginHomeUser(data)
        .then((user) => dispatch(LoginUser(user))
            ,(err)=> dispatch(AuthError(err.responseJSON)))
);

export const APIRegisterUser = (data) => dispatch => (
    RegisterNewUser(data)
        .then((user) => dispatch(RegisterUser(user))
        ,(err) => dispatch(AuthError(err.responseJSON)))
);

export const APIUserLogout = () => dispatch => (
    LogOutHomeUser()
        .then(() => dispatch(LogOutUser())
        ,(err)=> dispatch(AuthError(err.responseJSON)))
)



