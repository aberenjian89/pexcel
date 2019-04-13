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

const style = theme => ({
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
  }
});

class HomeUserGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleRemove = this.handleRemove.bind(this);
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.images.length > 0 ? (
          <GridList className={classes.gridList} cols={3} cellHeight={150}>
            {this.state.images.map((img, key) => (
              <GridListTile key={key} rows={2}>
                <img src={img.file} alt={img.name} />
                <GridListTileBar
                  actionIcon={
                    <IconButton
                      className={classes.icon}
                      onClick={e => this.handleRemove(e, key, img)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
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
