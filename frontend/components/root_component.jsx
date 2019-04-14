import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import AppComponent from "./app_component";

const RootComponent = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AppComponent />
    </HashRouter>
  </Provider>
);

export default RootComponent;
