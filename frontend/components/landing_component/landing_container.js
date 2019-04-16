import { connect } from "react-redux";
import LandingComponent from "./landing_component";
import { LandingFetchImages } from "../../actions/landing_actions";
import {
  ModalOpen,
  LandingImageIndex
} from "../../actions/image_view_selection";

const mapStateToProps = state => {
  let landing_image;
  if (state.LandingGallery.landing_images != null) {
    landing_image = Object.values(state.LandingGallery.landing_images);
  } else {
    landing_image = [];
  }
  return {
    LandingImages: landing_image
  };
};

const mapDispatchToProps = dispatch => ({
  FetchImages: () => dispatch(LandingFetchImages()),
  ImageViewModal: () => dispatch(ModalOpen()),
  LandingImageIndex: index => dispatch(LandingImageIndex(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingComponent);
