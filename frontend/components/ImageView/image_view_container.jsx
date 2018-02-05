import {connect} from 'react-redux'
import ImageView from './image_view'
import {withRouter} from 'react-router-dom'
import {FetchImg,UpdateUserImg} from './../../actions/image_action';

const mapStateToProps= (state,ownProps) =>{
    let viewtype = "Read";
    debugger;
    if (ownProps.image.author_id === state.session.CurrentUser.id){
        viewtype = "Read&Write"
    }

    return {
        viewtype,
        image : ownProps.image,
        UserId: state.session.CurrentUser
    }
};

const mapDisptachToProps = dispatch => (
    {
        fetchimg: (imgId) => dispatch(FetchImg(imgId)),
        updateuserimg: (userId,imgId,img) => dispatch(UpdateUserImg(userId,imgId,img))
    }
);

export default withRouter(connect(mapStateToProps,mapDisptachToProps)(ImageView));


