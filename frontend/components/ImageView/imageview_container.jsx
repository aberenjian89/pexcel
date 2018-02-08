import {connect} from 'react-redux'
import ImageView from './Imageview'
import {withRouter} from 'react-router-dom'
import {UpdateUserImg,DeleteUserImg,FetchUserImg} from './../../actions/image_action';
import {FetchUserImgs} from "../../actions/image_action";
import {FetchImageView,FetchAuthorImage} from '../../actions/Image_view_action'

const mapStateToProps= (state,ownProps) =>{

    return {
        imageid : ownProps.match.params.image_id,
        image: state.entities.imageview,
        CurrentUser: state.session.CurrentUser,
        author: state.entities.imageauthor
    }
};

const mapDisptachToProps = dispatch => (
    {
        fetchimg: (imgId) => dispatch(FetchImageView(imgId)),
        fetchuserimgs: (userId) => dispatch(FetchUserImgs(userId)),
        updateuserimg: (userId,imgId,img) => dispatch(UpdateUserImg(userId,imgId,img)),
        deleteuserimg: (userId,imgId) => dispatch(DeleteUserImg(userId,imgId)),
        fetchauthorimage: (authorId) => dispatch(FetchAuthorImage(authorId))
    }
);

export default withRouter(connect(mapStateToProps,mapDisptachToProps)(ImageView));


