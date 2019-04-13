import merge from "lodash/merge";
import {
  HOME_USER_FETCH_IMAGES,
  HOME_USER_REMOVE_IMAGE
} from "../actions/home_gallery";

const _initState = {
  home_gallery: null
};

const HomeUserGallery = (state = _initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case HOME_USER_FETCH_IMAGES:
      return merge({}, state, { home_gallery: action.data });
    case HOME_USER_REMOVE_IMAGE:
      newState = Object.assign({}, state, { home_gallery: action.data });
      return newState;
    default:
      return state;
  }
};

export default HomeUserGallery;
