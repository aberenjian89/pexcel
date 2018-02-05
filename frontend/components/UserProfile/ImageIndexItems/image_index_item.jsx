import React from 'react'
import ImageViewContainer from "../../ImageView/image_view_container";
import {Link} from 'react-router-dom'


class ImageIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state =({modalIsOpen: true});
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount(){
        this.setState({modalIsOpen: true})
    }

    toggle(){
        if (this.state.modalIsOpen===false){
            return this.setState({modalIsOpen: true})
        }else{
            return this.setState({modalIsOpen: false})
        }
    }

    render(){
        return (
            <div>
                <li><img onClick={this.toggle} src={this.props.image.img_url} width="250" height="250"/></li>
                 {!this.state.modalIsOpen ? <ImageViewContainer image={this.props.image}/> : ""}
            </div>
        )
    }
}

export default  ImageIndexItem;