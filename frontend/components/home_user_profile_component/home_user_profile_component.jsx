import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%"
  },
  card: {
    minWidth: 275,
    maxWidth: "50%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  avatar: {
    width: 60,
    height: 60
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
        <Card className={classes.card}>
          <CardContent>
            <div>
              {this.props.CurrentUser.avatar ? (
                <Avatar className={classes.avatar} />
              ) : (
                <Avatar className={classes.avatar} />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(HomeUserProfileComponent);
