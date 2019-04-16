import merge from "lodash/merge";
import {
  LANDING_IMAGE_INDEX,
  GALLERY_IMAGE_INDEX,
  IMAGE_VIEW_MODAL_OPEN,
  IMAGE_VIEW_MODAL_CLOSE
} from "../actions/image_view_selection";

const _initState = {
  landing_index: null,
  gallery_index: null,
  image_view_modal: false
};

const ImageViewSelectionReducer = (state = _initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case LANDING_IMAGE_INDEX:
      newState = Object.assign({}, state, {
        landing_index: action.date,
        gallery_index: null
      });
      return newState;
    case GALLERY_IMAGE_INDEX:
      newState = Object.assign({}, state, {
        landing_index: null,
        gallery_index: action.data
      });
      return newState;
    case IMAGE_VIEW_MODAL_OPEN:
      newState = merge({}, state, { image_view_modal: true });
      return newState;
    case IMAGE_VIEW_MODAL_CLOSE:
      newState = merge({}, state, { image_view_modal: false });
      return newState;
    default:
      return state;
  }
};

export default ImageViewSelectionReducer;
