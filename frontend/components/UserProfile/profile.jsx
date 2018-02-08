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
        window.renderGrid();
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

        let followers;
        let followee;


        if (this.props.follow.number_followee){
            if (parseInt(this.props.follow.number_followee) > 0){
                followee = this.props.follow.number_followee
            } else{
                followee = 0;
            }

            if (parseInt(this.props.follow.number_followers) > 0){
                followers = this.props.follow.number_followers
            }else{
                followers = 0;
            }
        }else{
            if (parseInt(this.props.CurrentUser.number_followee) > 0){
                followee = this.props.CurrentUser.number_followee
            } else{
                followee = 0;
            }

            if (parseInt(this.props.CurrentUser.number_followers) > 0){
                followers = this.props.CurrentUser.number_followers
            }else{
                followers = 0;
            }
        }

       return(
               <div className="profile-container">
                   <div className="profile-status">
                       <img className="profile-pic"
                            src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"/>
                       <h3>{this.props.CurrentUser.username} Profile</h3>
                       <div className="status">
                           <ul>
                               <li>Followers: <span>{followee}</span></li>
                               <li>Following: <span>{followers}</span></li>
                           </ul>
                       </div>
                   </div>
                   <div id="gallery-container">
                        {images}
                    </div>
               </div>

       )
    }
}


export default Profile;