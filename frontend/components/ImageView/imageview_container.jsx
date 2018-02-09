import {connect} from 'react-redux'
import ImageView from './Imageview'
import {withRouter} from 'react-router-dom'
import {DeleteUserImg,FetchUserImg} from './../../actions/image_action';
import {UpdateUserImg} from "../../actions/Image_view_action";
import {FetchUserImgs} from "../../actions/image_action";
import {FetchImageView,FetchAuthorImage} from '../../actions/Image_view_action'
import {CreateFollow,DeleteFollow} from "../../actions/follow_action";

const mapStateToProps= (state,ownProps) =>{

    return {
        imageid : ownProps.match.params.image_id,
        image: state.entities.imageview,
        CurrentUser: state.session.CurrentUser,
        author: state.entities.imageauthor,
        Imageerror : state.errors.imageview
    }
};

const mapDisptachToProps = dispatch => (
    {
        fetchimg: (imgId) => dispatch(FetchImageView(imgId)),
        fetchuserimgs: (userId) => dispatch(FetchUserImgs(userId)),
        updateuserimg: (userId,imgId,img) => dispatch(UpdateUserImg(userId,imgId,img)),
        deleteuserimg: (userId,imgId) => dispatch(DeleteUserImg(userId,imgId)),
        createFollow : (FolloweeId) => dispatch(CreateFollow(FolloweeId)),
        removeFollow : (followeeId) => dispatch(DeleteFollow(followeeId))
    }
);

export default withRouter(connect(mapStateToProps,mapDisptachToProps)(ImageView));


