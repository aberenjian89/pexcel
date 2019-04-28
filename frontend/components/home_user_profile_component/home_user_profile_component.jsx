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
    marginBottom: "25px",
    marginTop: "25px"
  },
  card_wrapper:{
    display: "flex",
    justifyContent: "center"
  },
  card: {
     width: "30%",
     minHeight: 200,
     marginLeft: theme.spacing.unit,
     marginRight: theme.spacing.unit,
     marginBottom: theme.spacing.unit,
     marginTop: theme.spacing.unit,
     "@media only screen and (min-width: 600)":{
       width: "70%"
     }
  },
  profile_header:{
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "wrap"
  },
  follower_content:{
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit
  },
  thought_description:{
      maxWidth: 350,
      maxHeight: 100,
      overflow: "scroll"
  },
  avatar_container:{
    marginTop: theme.spacing.unit
  },
  avatar: {
    minWidth: 120,
    minHeight: 120,
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
        <div className={classes.card_wrapper}>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.profile_header}>
                <div className={classes.avatar_container}>
                {this.props.CurrentUser.avatar ? (
                  <Avatar className={classes.avatar} />
                ) : (
                  <Avatar className={classes.avatar} />
                )}
                </div>
                <div>
                  <div className={classes.follower_content}>
                    <Typography variant="subtitle1">
                        Followers: 0
                    </Typography>
                    <Typography variant="subtitle1">
                        Following: 0
                    </Typography>
                  </div>
                  <div className={classes.thought_description}>
                    <Typography>
                      Lorem ipsum aliquet platea luctus bibendum vivamus aliquam lectus orci aliquam, consequat sodales condimentum aenean convallis
                      porttitor at fames faucibus, neque vestibulum id luctus blandit potenti duis aenean congue
                      sociosqu urna molestie consequat interdum torquent inceptos pretium per potenti tellus proin elit felis.
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomeUserProfileComponent);
