import React from 'react'
import ImageIndexItem from '../UserProfile/ImageIndexItems/image_index_item';
import StackGrid from 'react-stack-grid'
import Masonry from 'react-masonry-component'
import {Link} from 'react-router-dom'

class ImageGalleryGrid extends React.Component{
    constructor(props){
        super(props);
        // this.state = this.props.images || {};
    }

    componentDidMount(){
        this.props.fetchallimage();
       // window.renderGrid();

    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.images)
    }


    componentWillMount(){
    }


    render(){
        let images;
        images=[];
        if (this.props.images.length > 0){
             images = this.props.images.map(image => <ImageIndexItem key={image.id} image={image}/>)
           // images = this.props.images.map(image => <li className="image-class" key={image.id}><img src={image.img_url}/></li>)

        }

        return(

            <div className="gallery">
                <h1>The Top Photos</h1>
                <section id="photos">
                    {images}
                </section>
            </div>
        );
    }
}


export default ImageGalleryGrid;