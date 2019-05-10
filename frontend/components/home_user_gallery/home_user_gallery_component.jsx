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
      marginTop: theme.spacing.unit,
      overflow: "hidden",
      // '& div:first-child':{
      //     margin: "0 auto"
      // }
  },
  gridList: {
    width: "100%"
  },
  masonry:{
    margin: "0 auto"
  },
  icon_container:{
    cursor: "inherit",
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 6,
    paddingTop: 6,
    [theme.breakpoints.up("xs")]: {
    },
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
    },
    [theme.breakpoints.up("xl")]: {
    }
  },
  icon: {
    fontSize: 30,
    cursor: "pointer",
    color: "#fff",
    "& :hover": {
      // color: "#b71c1c"
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
  image_container:{
    position: "relative"
  },
  image_tile_bar:{
    height: 50,
    background: "rgba(50, 50, 50, 0.75)",
    position: "absolute",
    width: "97%",
    bottom: "1.5%",
    right: 0,
    left: "2%",
    opacity: 0.6,
    display: "flex",
    visibility: "hidden",
    justifyContent: "flex-end",
    zIndex: 4,
    "-webkit-box-shadow": "0px -6px 3px rgba(50, 50, 50, 0.75)",
    "-moz-box-shadow": "0px -6px 3px rgba(50, 50, 50, 0.75)",
    "box-shadow": "0px -6px 3px rgba(50, 50, 50, 0.75)",
    [theme.breakpoints.up("xs")]: {
      display: "none"
    },
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: "98%",
      left: "1%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "98%",
      left: "1%",

    },
    [theme.breakpoints.up("xl")]: {
        width: "98%",
        left: "1%",
        bottom: "1%"
    }
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
      images: [],
      current_hover_index: null
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleImageView = this.handleImageView.bind(this);
    this.DisplayTileBar = this.DisplayTileBar.bind(this);
    this.HideTileBar = this.HideTileBar.bind(this);
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

  DisplayTileBar(e,k){
      let element = $(`#${k}`)
      element.css('visibility','visible')
  }

  HideTileBar(e,k){
      let element = $(`#${k}`)
      element.css('visibility','hidden')
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
            <Masonry options={masonryOptions} className={classes.masonry}>
                {this.state.images.map((img,key)=> (
                    <div key={key} onMouseEnter={(e)=>this.DisplayTileBar(e,key)} onMouseLeave={(e)=>this.HideTileBar(e,key)}>
                      <div className={classes.image_container}>
                        <img src={img.file} key={key} className={classes.image}/>
                        <div className={classes.image_tile_bar} id={key}>
                            <div>
                                <IconButton className={classes.icon_container} onClick={(e)=> this.handleRemove(e,key,img)}>
                                    <DeleteIcon className={classes.icon} />
                                </IconButton>
                            </div>
                        </div>
                      </div>
                    </div>
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
