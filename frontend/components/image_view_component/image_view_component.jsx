import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap"
  },
  gridList: {
    width: "100%"
  }
});

class ImageViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      current_image: null,
      current_index: null,
      image_list: []
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleImageDisplay = this.handleImageDisplay.bind(this);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.image_view_modal) {
      this.setState({
        open: nextprops.image_view_modal,
        image_list: [...nextprops.image_list],
        current_index: nextprops.current_index,
        current_image: nextprops.image_list[nextprops.current_index]
      });
    }
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
    this.props.ModalClose();
  }

  handleImageDisplay() {
    if (this.state.current_index == null) {
      return;
    }
    debugger;
    return this.state.image_list[this.state.current_index].file;
  }

  render() {
    const { fullScreen } = this.props;
    const { classes } = this.props;
    return (
      <div>
        {this.state.open ? (
          <Dialog
            fullScreen={fullScreen}
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
          >
            <DialogContent>
              <GridList className={classes.gridList} cols={1} cellHeight={250}>
                <GridListTile rows={2}>
                  <img src={this.handleImageDisplay()} />
                </GridListTile>
                {/* <GridListTile>
                  <div>
                    <div>
                      {this.state.current_image.owner.avatar ? (
                        <img
                          src={this.state.current_image.owner.avatar}
                          width="100"
                          height="100"
                        />
                      ) : (
                        <ion-icon name="contact" />
                      )}
                    </div>
                    <div>
                      <Typography>Hello</Typography>
                    </div>
                  </div>
                </GridListTile> */}
              </GridList>
            </DialogContent>
          </Dialog>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ImageViewComponent);
