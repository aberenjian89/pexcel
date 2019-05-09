import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "3%",
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  gridList: {
    width: "100%",
    height: 450
  }
});

class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleImageView = this.handleImageView.bind(this);
    this.handleImageSizeCol = this.handleImageSizeCol.bind(this)
    this.handleImageSizeRows = this.handleImageSizeRows.bind(this)
  }

  componentDidMount() {
    this.props.FetchImages();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.LandingImages.length != this.state.images.length) {
      this.setState({
        images: [...nextprops.LandingImages]
      });
    }
  }

  handleImageView(e, index) {
    this.props.LandingIndex(index);
    this.props.ImageViewModal();
  }

  handleImageSizeCol(img){
    if (img.size.width === img.size.height){
      return 3
    }else{
      return 4
    }
  }

  handleImageSizeRows(img){
    if (img.size.width >= img.size.height){
      return 3
    }else if (img.size.height > img.size.width){
      return 5
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          {this.state.images.map((img, key) => (
            <GridListTile
              key={key}
              // cols={this.handleImageSizeCol(img)}
              // rows={this.handleImageSizeRows(img)}
              onClick={e => this.handleImageView(e, key)}
            >
              <img src={img.file} alt={img.name} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
