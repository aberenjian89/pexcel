import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Masonry from 'react-masonry-component';


const styles = theme => ({
  root: {
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: "3%",
    '& div':{
        margin: "0 auto"
    }

  },
  gridList: {
    width: "100%",
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


class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleImageView = this.handleImageView.bind(this);
    this.renderImages = this.renderImages.bind(this)
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

  renderImages(){
    let {classes} = this.props
    let ChildElement = this.state.images.map((img,key)=>{
      return (
            <img src={img.file} key={key} className={classes.image}/>
      )
    })
    return ChildElement
  }

  render() {
    const { classes } = this.props;
    const masonryOptions = {
        isFitWidth: true,
        percentPosition: true

    }
    return (
      <div className={classes.root}>
        {/*<GridList cellHeight={180} cols={3} className={classes.gridList}>*/}
          {/*{this.state.images.map((img, key) => (*/}
            {/*<GridListTile*/}
              {/*key={key}*/}
              {/*cols={this.handleImageSizeCol(img)}*/}
              {/*rows={this.handleImageSizeRows(img)}*/}
              {/*onClick={e => this.handleImageView(e, key)}*/}
            {/*>*/}
              {/*<img src={img.file} alt={img.name}/>*/}
            {/*</GridListTile>*/}
          {/*))}*/}
        {/*</GridList>*/}
        <div>
            <Masonry
            options={masonryOptions}>
                {this.renderImages()}
            </Masonry>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingComponent);
