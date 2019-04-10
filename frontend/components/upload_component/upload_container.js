import { connect } from "react-redux";
import { UploadModalHide } from "../../actions/upload_modal";
import UploadComponent from "./upload_component";
import { UploadImages } from "./UploadAPI";

const mapStateToProps = state => ({
  ModalStatus: state.UploadModal.open,
  CurrentUser: state.Session.current_user
});

const mapDispatchToProps = dispatch => ({
  ModalHide: () => dispatch(UploadModalHide()),
  Upload: images => UploadImages(images)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadComponent);
