import merge from "lodash/merge";
import { FETCH_LANDING_IMAGE } from "../actions/landing_actions";

const _initialState = {
  landing_images: null
};

const LandingGalleryReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case FETCH_LANDING_IMAGE:
      newState = Object.assign({}, state, { landing_images: action.data });
      return newState;
    default:
      return state;
  }
};

export default LandingGalleryReducer;
