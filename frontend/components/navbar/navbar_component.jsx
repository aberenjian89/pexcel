import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import AddToPhotos from "@material-ui/icons/AddToPhotos"

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    "font-family": "Anton, sans-serif"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});



class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      authenticate: null
    };
    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.OpenAuthModal = this.OpenAuthModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }

  componentDidMount(props){
    this.setState({
        authenticate: this.props.authenticate
    })
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.authenticate !== this.state.authenticate) {
      this.setState({
          authenticate: nextProps.authenticate
      })
    }
  }

  handleProfileMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  }

  handleMobileMenuOpen(event) {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  }

  handleMobileMenuClose() {
    this.setState({ mobileMoreAnchorEl: null });
  }

  OpenUploadModal(){
    this.props.UploadModalShow()
  }

  handleLogout(){
    this.props.LogOutUser()
    .then(()=> this.setState({
      anchorEl: null
    }))
  }

  handleRoute(route){
    switch (route){
        case 'upload':
          this.props.history.push('/upload');
          break;
        case 'profile':
          this.props.history.push('/profile');
          break;
        default:
          break;

    }
  }

  OpenAuthModal(e,type) {
    this.props.ModalShow(type)
  }


  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          My Profile
        </MenuItem>
        <MenuItem onClick={()=> this.OpenUploadModal()}>
          <IconButton color="inherit">
            <AddToPhotos />
          </IconButton>
            Upload
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <SettingIcon />
          </IconButton>
          Setting
        </MenuItem>
        <MenuItem onClick={(e) => this.handleLogout(e)}>
          <IconButton color="inherit" onClick={(e) => this.handleLogout(e)}>
            <ExitToAppIcon />
          </IconButton>
          LogOut
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          My Profile
        </MenuItem>
        <MenuItem onClick={()=> this.OpenUploadModal()}>
            <IconButton color="inherit">
                <AddToPhotos />
            </IconButton>
            Upload
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <SettingIcon />
          </IconButton>
          Setting
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
          LogOut
        </MenuItem>
      </Menu>
    );

    const renderMobileMenuUnAuthenticate = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={this.handleMenuClose}>
            <MenuItem onClick={(e)=> this.OpenAuthModal(e,'Sign_In')}>
               Sign-In
            </MenuItem>
            <MenuItem onClick={(e)=> this.OpenAuthModal(e,'Sign_Up')}>
                Sign-Up
            </MenuItem>
        </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h4"
              color="inherit"
              noWrap
            >
              PEXCEL
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search you Image…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <div className={classes.grow} />
            {this.state.authenticate  && (
              <div className={classes.sectionDesktop}>
                <Button  color="inherit">
                  My Gallery
                </Button>
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
            {!this.state.authenticate && (
                <div className={classes.sectionDesktop}>
                    <Button color="inherit" onClick={(e)=> this.OpenAuthModal(e,"Sign_In")}>Sign in</Button>
                    <Button color="inherit" onClick={(e)=> this.OpenAuthModal(e,"Sign_Up")}>Sign up</Button>
                </div>
            )}
            <div className={classes.sectionMobile}>
                <IconButton
                    aria-haspopup="true"
                    onClick={this.handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon/>
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {this.state.authenticate && (
          renderMobileMenu
        )}
        {!this.state.authenticate && (
          renderMobileMenuUnAuthenticate
        )}
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarComponent);
