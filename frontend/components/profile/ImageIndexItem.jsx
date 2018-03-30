import React from 'react'

class ImageIndexItem extends React.Component{
    constructor(props){
        super(props)


    }


    render(){
        return (
            <figure>
                <img className="figure-img" src={this.props.image_url}/>
            </figure>
        )
    }

}

export default ImageIndexItem;