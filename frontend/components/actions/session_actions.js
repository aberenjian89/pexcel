export const LOGIN_USER = "LOGIN_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_CLEAR_ERROR = "AUTH_CLEAR_ERROR"


export const LoginUser = (user) => ({
    type: LOGIN_USER,
    data: user
});

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




