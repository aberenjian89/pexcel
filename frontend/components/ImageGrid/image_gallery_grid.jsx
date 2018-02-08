import React from 'react'
import ImageIndexItem from '../UserProfile/ImageIndexItems/image_index_item';
import Masonry from 'react-masonry-component'
import MasonryInfiniteScroller from 'react-masonry-infinite'



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

        let masonryOptions = {
            transitionDuration: 1000
        };

        return(

            <div className="gallery">
                {/*<div>*/}
                    {/*/!*<ul className="gallery-menu">*!/*/}
                        {/*/!*<li>People</li>*!/*/}
                        {/*/!*<li>Landscapes</li>*!/*/}
                        {/*/!*<li>Nature</li>*!/*/}
                        {/*/!*<li>City</li>*!/*/}
                        {/*/!*<li>Animals</li>*!/*/}
                    {/*/!*</ul>*!/*/}
                {/*</div>*/}
                <h1>The Top Photos</h1>
                <div id="gallery-container">
                    {/*<ul className="image-list">*/}
                        {/*{images}*/}
                    {/*</ul>*/}
                    {images}
                </div>
            </div>
        );
    }
}


export default ImageGalleryGrid;