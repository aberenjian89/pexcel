import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Info from "@material-ui/icons/Info";
import TextField from "@material-ui/core/TextField";
import WatchLater from "@material-ui/icons/WatchLater";
import { relative } from "path";

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
      width: "51%"
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
    overflow: "scroll",
    share_thought:{
      width: "50%"
    }
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
  avatar_typegraphy: {
    color: "#fff"
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
    width: "100%"
  },
  detail_card: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    },
    [theme.breakpoints.up("md")]: {
      width: "30%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "15%"
    }
  },
  detail_card_activity: {
    height: 150,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    },
    [theme.breakpoints.up("md")]: {
      width: "30%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "25%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "15%"
    }
  },
  infomration_card_container: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "45%",
    "& p": {
      fontSize: 18,
      lineHeight: 1.3,
      marginLeft: "0.5rem"
    },
    [theme.breakpoints.up("xs")]: {
      width: "40%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "35%"
    }
  },
  input_form: {
    "& form": {
      marginRight: 8,
      marginLeft: 8,
      "& input": {
        fontSize: "14px !important"
      }
    }
  },
  submit_container: {
    display: "flex",
    justifyContent: "flex-end",
    "& span:first-child": {
      padding: "0 12px"
    },
    "& span": {
      textTransform: "capitalize",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "normal"
    }
  },
  infomration_card: {
    display: "flex",
    flexDirection: "column"
  },
  detail_activity: {
    display: "flex",
    margin: "1rem",
    "& p": {
      marginRight: theme.spacing.unit
    },
    "& p:nth-child(2)": {
      lineHeight: "1.9"
    }
  },
  upload_container: {
    position: "relative",
    "& input": {
      position: "absolute",
      width: 76,
      opacity: 0,
      top: "25%",
      height: 32,
      zIndex: 1,
      cursor: "pointer"
    },
    display: "flex",
    justifyContent: "center"
  }
});

class HomeUserProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      first_name: "",
      last_name: "",
      email: "",
      share_thought: "",
      avatar: null
    };
    this.GetInitial = this.GetInitial.bind(this);
    this.handleInut = this.handleInut.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    this.GetImageUrl = this.GetImageUrl.bind(this);
    this.RemoveAvatar = this.RemoveAvatar.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  fileHandler(e) {
    e.preventDefault();
    if (e.currentTarget.files) {
      this.setState(
        {
          avatar: e.currentTarget.files[0]
        },
        () => {
          let formData = new FormData();
          formData.append("data[avatar]", this.state.avatar);
          this.props.UplaodUserAvatar(formData);
        }
      );
    }
  }

  GetImageUrl() {
    if (this.props.HomeUser.avatar_url) {
      return this.state.avatar;
    } else {
      return URL.createObjectURL(this.state.avatar);
    }
  }

  componentDidMount(props) {
    this.props.APIHomeUser(this.props.CurrentUser.id);
  }

  componentWillReceiveProps(nextprops) {
    this.setState({
      id: nextprops.HomeUser.id,
      first_name: nextprops.HomeUser.first_name,
      last_name: nextprops.HomeUser.last_name,
      email: nextprops.HomeUser.email,
      location: nextprops.HomeUser.location,
      avatar: nextprops.HomeUser.avatar_url
    });
  }

  GetInitial() {
    if (this.state.first_name.length > 0 && this.state.last_name.length > 0) {
      return (
        this.state.first_name[0].toUpperCase() +
        "|" +
        this.state.last_name[0].toUpperCase()
      );
    } else {
      return (
        this.props.CurrentUser.username[0].toUpperCase() +
        "|" +
        this.props.CurrentUser.username[1].toUpperCase()
      );
    }
  }

  handleInut(e, name) {
    this.setState({
      [name]: e.currentTarget.value
    });
  }

  updateHandler(e) {
    e.preventDefault();
    let info = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    }
    this.props.UpdateHomeUser(this.state.id, info);
  }

  RemoveAvatar(e) {
    e.preventDefault();
    this.props.RemoveAvatar();
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
                  {this.state.avatar ? (
                    <div className={classes.avatar_content}>
                      <Avatar
                        className={classes.avatar}
                        src={this.GetImageUrl()}
                      />
                      <Button
                        variant="outlined"
                        component="span"
                        className={classes.button}
                        onClick={e => this.RemoveAvatar(e)}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className={classes.avatar_content}>
                      <Avatar className={classes.avatar}>
                        <Typography
                          variant="h4"
                          className={classes.avatar_typegraphy}
                        >
                          {this.GetInitial()}
                        </Typography>
                      </Avatar>
                      <div className={classes.upload_container}>
                        <input
                          type="file"
                          onChange={e => this.fileHandler(e)}
                        />
                        <Button
                          variant="outlined"
                          component="span"
                          className={classes.button}
                        >
                          Upload
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.follower_content}>
                    <Typography variant="subtitle1">Followers: 0</Typography>
                    <Typography variant="subtitle1">Following: 0</Typography>
                  </div>
                  <div className={classes.thought_description}>
                    {/*<Typography>*/}
                      {/*Lorem ipsum aliquet platea luctus bibendum vivamus aliquam*/}
                      {/*lectus orci aliquam, consequat sodales condimentum aenean*/}
                      {/*convallis porttitor at fames faucibus, neque vestibulum id*/}
                      {/*luctus blandit potenti duis aenean congue sociosqu urna*/}
                      {/*molestie consequat interdum torquent inceptos pretium per*/}
                      {/*potenti tellus proin elit felis.*/}
                    {/*</Typography>*/}
                      <TextField type="text"
                          name="share_thought"
                          placeholder="What is in your mind?"
                          margin="normal"
                          variant="outlined"
                          value={this.state.share_thought}
                          multiline={true}
                          className={classes.share_thought}
                          rows={3}
                          rowsMax={3}
                          onChange={e => this.handleInut(e,"share_thought")}
                      />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.detail_wrapper}>
          <div className={classes.content_wrapper}>
            <Card className={classes.detail_card}>
              <CardContent>
                <div className={classes.infomration_card_container}>
                  <div className={classes.header}>
                    <Info />
                    <Typography variant="body1">Information</Typography>
                  </div>
                  <div className={classes.input_form}>
                    <form>
                      <TextField
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        margin="normal"
                        variant="outlined"
                        value={this.state.first_name}
                        required
                        fullWidth={true}
                        onChange={e => this.handleInut(e, "first_name")}
                      />
                      <TextField
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        margin="normal"
                        variant="outlined"
                        required
                        value={this.state.last_name}
                        fullWidth={true}
                        onChange={e => this.handleInut(e, "last_name")}
                      />
                      <TextField
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        margin="normal"
                        required
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => this.handleInut(e, "email")}
                      />
                      {/* <TextField
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={this.state.location}
                        margin="normal"
                        variant="outlined"
                        fullWidth={true}
                        onChange={e => this.handleInut(e, "location")}
                      /> */}
                      <div className={classes.submit_container}>
                        <Button
                          onClick={e => this.updateHandler(e)}
                          variant="outlined"
                        >
                          Update
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.detail_card_activity}>
              <CardContent>
                <div className={classes.infomration_card}>
                  <div className={classes.header}>
                    <WatchLater />
                    <Typography variant="body1">Activites</Typography>
                  </div>
                  <div className={classes.information}>
                    <div className={classes.detail_activity}>
                      <Typography variant="body2">Member since:</Typography>
                      <Typography>04/2019</Typography>
                    </div>
                    <div className={classes.detail_activity}>
                      <Typography variant="body2">Last activity:</Typography>
                      <Typography>04/04/2019</Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomeUserProfileComponent);
