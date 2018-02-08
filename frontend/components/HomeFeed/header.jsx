import React from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../Ui/Spinner'
import ImageGalleryGridContainer from '../ImageGrid/image_gallery_grid_container'





class HomeFeed  extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div className="main-container">
                {/*<Spinner/>*/}
                <div className="header">
                    <div className="header-container">
                        <h3 className="animated  slideInLeft">Get inspired and share your best photos</h3>
                        <span className="animated slideInRight">Find your home among the world's best photographers.</span>
                        {/*<div className="header-container-link">*/}
                            {/*<Link to="/signup">JOIN PEXCEL</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <ImageGalleryGridContainer/>
            </div>
        )
    }
}


export default HomeFeed;