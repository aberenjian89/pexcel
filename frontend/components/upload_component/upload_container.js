import { connect } from "react-redux";
import { UploadModalHide } from "../../actions/upload_modal";
import UploadComponent from "./upload_component";
import { UploadImages } from "./UploadAPI";
import { withRouter } from "react-router-dom";
import { FetchHomeUserImages } from "../../actions/home_gallery";

const mapStateToProps = state => ({
  ModalStatus: state.UploadModal.open,
  CurrentUser: state.Session.current_user
});

const mapDispatchToProps = dispatch => ({
  ModalHide: () => dispatch(UploadModalHide()),
  Upload: images => UploadImages(images),
  FetchImages: () => dispatch(FetchHomeUserImages())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UploadComponent)
);
