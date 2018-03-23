import React from 'react';
import Heading from './heading'
import Navbar from './navbar'
import Footer from './footer'
import GalleryContainer from './Home_Gallery/gallery_container';


class Landing extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="wrapper">
                <Navbar  CurrentUser={this.props.currentUser}/>
                <Heading CurrentUser={this.props.currentUser}/>
                <GalleryContainer/>
                {/*<Footer/>*/}
            </div>
        )
    }
}


export default Landing;