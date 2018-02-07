import React from 'react';
import ImageIndexItem from './ImageIndexItems/image_index_item';
import Gallery from 'react-grid-gallery';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={show: false};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.onselected = this.onselected.bind(this);
    }


    componentDidMount(){
        this.props.fetchuserimgs(this.props.CurrentUser.id);
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.UserImgs)
    }

    closeLightbox(){
        this.setState({show: false})
    }


    onselected(){
        this.setState({show: true})
    }



    render(){
        let images ;
        let gallery=[];
        if (this.props.UserImgs.length > 0){
            images =this.props.UserImgs.map(image => <ImageIndexItem key={image.id} image={image}/>);

        }

       return(
               <div className="profile-container">
                   <div className="profile-status">
                       <img className="profile-pic"
                            src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"/>
                       <h3>{this.props.CurrentUser.username} Profile</h3>
                       <div className="status">
                           <ul>
                               <li>Affection: <span>0</span></li>
                               <li>Photo Views: <span>0</span></li>
                               <li>Followers: <span>0</span></li>
                               <li>Following: <span>0</span></li>
                           </ul>
                       </div>
                   </div>
                    <ul className="image-list">
                        {images}
                    </ul>
               </div>

       )
    }
}


export default Profile;