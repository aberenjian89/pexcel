import React from 'react'
import ImageViewContainer from "../../ImageView/imageview_container";
import {Link} from 'react-router-dom'


class ImageIndexItem extends React.Component{
    constructor(props){
        super(props);
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
            <div className="photo_thumbnail">
                <div>
                    <Link to={`/image/${this.props.image.id}`}>
                        <img src={this.props.image.img_url}/>
                    </Link>
                </div>
            </div>
        )
    }
}

export default  ImageIndexItem;