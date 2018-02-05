import React from 'react';
import ImageIndexItem from './ImageIndexItems/image_index_item'


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.UserImgs || {};
    }


    componentDidMount(){
        debugger;
        this.props.fetchuserimgs(this.props.CurrentUser.id);
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.UserImgs)
    }




    render(){
        let images ;
        if (this.props.UserImgs.length > 0){
            images =this.props.UserImgs.map(image => <ImageIndexItem key={image.id} image={image}/>);
        }
       return(
           <div>
               <ul>
                   {images}
               </ul>
           </div>
       )
    }
}


export default Profile;