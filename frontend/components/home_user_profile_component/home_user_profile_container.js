import { connect } from "react-redux";
import HomeProfileUserComponent from "./home_user_profile_component";
import {
  APIHomeUser,
  APIUploadHomeUserAvatar,
  APIRemoveHomeUserAvatar,
  APIUpdateHomeUser
} from "../../actions/home_user_profile_actions";

const mapStateToProps = state => ({
  CurrentUser: state.Session.current_user,
  HomeUser: state.HomeUserProfile.home_user_profile
});

const mapDispatchToProps = dispatch => ({
  APIHomeUser: HomeUserId => dispatch(APIHomeUser(HomeUserId)),
  UpdateHomeUser: (HomeUserId, data) =>
    dispatch(APIUpdateHomeUser(HomeUserId, data)),
  UplaodUserAvatar: data => dispatch(APIUploadHomeUserAvatar(data)),
  RemoveAvatar: () => dispatch(APIRemoveHomeUserAvatar())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeProfileUserComponent);
