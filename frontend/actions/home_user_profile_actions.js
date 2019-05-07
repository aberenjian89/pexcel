export const RECEIVE_HOME_USER = "RECEIVE_HOME_USER";
export const UPDATE_HOME_USER = "UPDATE_HOME_USER";
import {
  FetchHomeUser,
  FetchUpdateUser,
  UploadHomeUserAvatar
} from "../components/home_user_profile_component/UserAPI";

export const RecieveHomeUser = user => ({
  type: RECEIVE_HOME_USER,
  data: user
});

export const UpdateHomeUser = user => ({
  type: UPDATE_HOME_USER,
  data: user
});

export const APIHomeUser = home_user_id => dispatch =>
  FetchHomeUser(home_user_id).then(user => {
    return dispatch(RecieveHomeUser(user));
  });

export const APIUpdateHomeUser = home_user_id => dispatch =>
  FetchUpdateUser(home_user_id).then(user => {
    return dispatch(UpdateHomeUser(user));
  });

export const APIUploadHomeUserAvatar = data => dispatch =>
  UploadHomeUserAvatar(data).then(user => {
    return dispatch(UpdateHomeUser(user));
  });
