import React from 'react'
import ImageIndexItem from '../UserProfile/ImageIndexItems/image_index_item';




class ImageGalleryGrid extends React.Component{
    constructor(props){
        super(props);
        debugger;
        // this.state = this.props.images || {};
    }

    componentDidMount(){
        this.props.fetchallimage();
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.images)
    }

    render(){
        let images;
        if (this.props.images.length > 0){
            images = this.props.images.map(image => <ImageIndexItem key={image.id} image={image}/>)
        }
        return(
            <div className="home-gallery">
                <h1>The Top Photos</h1>
                <ul className="gallery-menu">
                    <li>People</li>
                    <li>Landscapes</li>
                    <li>Nature</li>
                    <li>City</li>
                    <li>Animals</li>
                </ul>
                <ul className="image-list">
                    {images}
                </ul>
            </div>
        );
    }
}


export default ImageGalleryGrid;