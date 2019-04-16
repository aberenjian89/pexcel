import { connect } from "react-redux";
import ImageViewComponent from "./image_view_component";
import { ModalClose } from "../../actions/image_view_selection";

const mapStateToProps = state => {
  let index;
  let list;
  if (state.ImageSelection.landing_index != null) {
    index = state.ImageSelection.landing_index;
    list = [...Object.values(state.LandingGallery.landing_images)];
  } else if (state.ImageSelection.gallery_index != null) {
    index = state.ImageSelection.gallery_index;
    list = [...Object.values(state.LandingGallery.home_gallery)];
  } else {
    index = null;
    list = null;
  }

  return {
    current_user: state.Session.current_user,
    current_index: index,
    image_list: list,
    image_view_modal: state.ImageSelection.image_view_modal
  };
};

const mapDispatchToProps = dispatch => ({
  ModalClose: () => dispatch(ModalClose())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewComponent);
