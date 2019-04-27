import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AuthRoute, ProtectedAuth } from "./Auth_guard";

import NavbarContainer from "./navbar/navbar_container";
import AuthContainer from "./auth_component/auth_container";
import LandingContainer from "./landing_component/landing_container";
import UploadContainer from "./upload_component/upload_container";
import HomeUserGalleryContainer from "./home_user_gallery/home_user_gallery_container";
import FooterComponent from "./footer_component/footer_component";
import ImageViewContainer from "./image_view_component/image_view_container";
import ProfileContainer from './profile_component/profile_container'

const styles = theme => ({
  wrapper: {
    minHeight: "calc(100vh - 6vh)"
  }
});

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.wrapper}>
          <AuthContainer />
          <UploadContainer />
          <NavbarContainer />
          <ImageViewContainer />
          <Switch>
            <Route exact path="/" component={LandingContainer} />
            <ProtectedAuth
              exact
              path="/my_gallery"
              component={HomeUserGalleryContainer}
            />
            <ProtectedAuth
              exact
              path="/my_profile"
              component={ProfileContainer}
            />
          </Switch>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default withStyles(styles)(AppComponent);
