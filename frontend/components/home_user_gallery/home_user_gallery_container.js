import { connect } from "react-redux";
import {
  FetchHomeUserImages,
  RemoveHomeUserImage
} from "../../actions/home_gallery";
import HomeUserGalleryComponent from "./home_user_gallery_component";
import {
  ModalOpen,
  GalleryImageIndex
} from "../../actions/image_view_selection";

const mapStateToProps = state => {
  let user_gallery = null;
  if (state.HomeUserGallery.home_gallery !== null) {
    user_gallery = Object.values(state.HomeUserGallery.home_gallery);
  } else {
    user_gallery = [];
  }
  return {
    HomeGallery: user_gallery
  };
};

const mapDispatchToProps = dispatch => ({
  FetchHomeImages: () => dispatch(FetchHomeUserImages()),
  RemoveHomeImage: imageId => dispatch(RemoveHomeUserImage(imageId)),
  ImageViewModal: () => dispatch(ModalOpen()),
  GalleryImageIndex: index => dispatch(GalleryImageIndex(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeUserGalleryComponent);
