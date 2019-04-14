import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    // flexGrow: 1
  },
  appbar: {
    top: "auto",
    // bottom: "auto",
    marginTop: theme.spacing.unit,
    minHeight: "80px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  icons: {
    color: "black",
    "& :hover": {
      color: "#0099e5"
    }
  }
});

class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appbar} color="default">
          <Toolbar className={classes.toolbar}>
            <div>
              <a
                href="https://www.linkedin.com/in/alireza-berenjian/"
                className={classes.icons}
              >
                <ion-icon name="logo-linkedin" size="large" />
              </a>
              <a
                href="https://github.com/aberenjian89/pexcel"
                className={classes.icons}
              >
                <ion-icon name="logo-github" size="large" />
              </a>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(FooterComponent);
