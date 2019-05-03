import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    marginBottom: "25px",
    marginTop: "25px"
  },
  card_wrapper_header: {
    display: "flex",
    justifyContent: "center"
  },
  card: {
    minHeight: 220,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.up("md")]: {
      width: "60%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%"
    }
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textTransform: "capitalize"
  },
  profile_header: {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "wrap"
  },
  follower_content: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  thought_description: {
    maxWidth: 350,
    maxHeight: 100,
    overflow: "scroll"
  },
  avatar_container: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  avatar: {
    minWidth: 120,
    minHeight: 120
  },
  avatar_content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  detail_wrapper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  content_wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%"
  },
  detail_card: {
    minHeight: 220,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "45%"
    },
    [theme.breakpoints.up("md")]: {
      width: "40%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "20%"
    }
  }
});

class HomeUserProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.card_wrapper_header}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.profile_header}>
                <div className={classes.avatar_container}>
                  {this.props.CurrentUser.avatar ? (
                    <div className={classes.avatar_content}>
                      <Avatar className={classes.avatar} />
                      <Button
                        variant="outlined"
                        component="span"
                        className={classes.button}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className={classes.avatar_content}>
                      <Avatar className={classes.avatar} />
                      <Button
                        variant="outlined"
                        component="span"
                        className={classes.button}
                      >
                        Upload
                      </Button>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.follower_content}>
                    <Typography variant="subtitle1">Followers: 0</Typography>
                    <Typography variant="subtitle1">Following: 0</Typography>
                  </div>
                  <div className={classes.thought_description}>
                    <Typography>
                      Lorem ipsum aliquet platea luctus bibendum vivamus aliquam
                      lectus orci aliquam, consequat sodales condimentum aenean
                      convallis porttitor at fames faucibus, neque vestibulum id
                      luctus blandit potenti duis aenean congue sociosqu urna
                      molestie consequat interdum torquent inceptos pretium per
                      potenti tellus proin elit felis.
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.detail_wrapper}>
          <div className={classes.content_wrapper}>
            <Card className={classes.detail_card}>
              <CardContent />
            </Card>
            <Card className={classes.detail_card}>
              <CardContent />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomeUserProfileComponent);
