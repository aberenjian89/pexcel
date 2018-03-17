import React from 'react';
import Masonary from 'react-masonry-component'

class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {images:this.props.images};
    }

    componentDidMount(){
        if (this.state.images.length <= 0){
            this.props.fetchimages()
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({images:nextProps.images})
    }


    render(){
        let images =[];
        if (this.state.images){
            images =this.state.images.map((image)=>{
                return(
                    <div key={image.id} className="img-container">
                         <img src={image.img_url_small}/>
                    </div>
                )
            });
        }

        return (
            <section className="gallery">
                <div className="grid">
                 {images}
                </div>
            </section>
        )
    }
}



export default Gallery;