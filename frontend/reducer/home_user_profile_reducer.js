import merge from "lodash/merge";
import {
  RECEIVE_HOME_USER,
  UPDATE_HOME_USER
} from "../actions/home_user_profile_actions";

const _initialState = {
  home_user_profile: null
};

const HomeUserProfileReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_HOME_USER:
      newState = merge({}, state, { home_user_profile: action.data });
      return newState;
    case UPDATE_HOME_USER:
      newState = Object.assign({}, state, { home_user_profile: action.data });
      return newState;
    default:
      return state;
  }
};

export default HomeUserProfileReducer;
