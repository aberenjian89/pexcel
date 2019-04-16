import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";

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
        current_index: nextprops.current_index
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
    return this.state.image_list[this.state.current_index].file;
  }

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <img src={this.handleImageDisplay()} width="300" height="300" />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default ImageViewComponent;
