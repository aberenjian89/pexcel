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
    width: "100%"
  }
});

class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    debugger;
    this.props.FetchImages();
  }

  componentWillReceiveProps(nextprops) {
    debugger;
    if (nextprops.LandingImages.length != this.state.images.length) {
      this.setState({
        images: [...nextprops.LandingImages]
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          {this.state.images.map((img, key) => (
            <GridListTile key={key} rows={2}>
              <img src={img.file} alt={img.name} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
