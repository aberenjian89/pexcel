import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedAuth } from "./Auth_guard";

import NavbarContainer from "./navbar/navbar_container";
import AuthContainer from "./auth_component/auth_container";
import LandingContainer from "./landing_component/landing_container";
import UploadContainer from "./upload_component/upload_container";
import HomeUserGalleryContainer from "./home_user_gallery/home_user_gallery_container";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AuthContainer />
        <UploadContainer />
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <ProtectedAuth
            exact
            path="/my_gallery"
            component={HomeUserGalleryContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default AppComponent;
