import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import PhotoLibrary from "@material-ui/icons/PhotoLibrary";
import { debug } from "util";
import Masonry from 'react-masonry-component';


const style = theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
    // marginTop: "3%",
    // marginRight: theme.spacing.unit,
    // marginLeft: theme.spacing.unit
    // // minHeight: "calc(100vh - 17vh)"
      overflow: "hidden",
      '& div':{
          margin: "0 auto"
      }
  },
  gridList: {
    width: "100%"
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: "#fff",
    "& :hover": {
      color: "#f44336"
    }
  },
  empty_gallery_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  empty_gallery_icon: {
    fontSize: 200,
    color: "#bdbdbd"
  },
  empty_gallery_text: {
    color: "#bdbdbd"
  },
  image:{
      margin: 5,
      [theme.breakpoints.up("xs")]: {
          width: "400px"
      },
      [theme.breakpoints.up("sm")]: {
          width: "700px"
      },
      [theme.breakpoints.up("md")]: {
          width: "500px"
      },
      [theme.breakpoints.up("lg")]: {
          width: "370px"
      },
      [theme.breakpoints.up("xl")]: {
          width: "785px"
      }
  }
});

class HomeUserGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleImageView = this.handleImageView.bind(this);
  }

  componentDidMount(props) {
    this.props.FetchHomeImages();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.images.length !== nextProps.HomeGallery.length) {
      this.setState({
        images: [...nextProps.HomeGallery]
      });
    }
  }

  handleRemove(e, key, img) {
    this.props.RemoveHomeImage(img.id);
  }

  handleImageView(e, index) {
    this.props.GalleryImageIndex(index);
    this.props.ImageViewModal();
  }

  render() {
    const { classes } = this.props;
    const masonryOptions = {
          isFitWidth: true,
          percentPosition: true

      }
    return (
      <div className={classes.root}>
        {this.state.images.length > 0 ? (
            <Masonry options={masonryOptions}>
                {this.state.images.map((img,key)=> (
                    <img src={img.file} key={key} className={classes.image}/>
                ))}
            </Masonry>
        ) : (
          <div className={classes.empty_gallery_container}>
            <PhotoLibrary
              className={classes.empty_gallery_icon}
              fontSize="large"
            />
            <Typography
              variant="display3"
              className={classes.empty_gallery_text}
            >
              Gallery Empty
            </Typography>
          </div>
        )}
      </div>
    );
  }
}

HomeUserGalleryComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(HomeUserGalleryComponent);
