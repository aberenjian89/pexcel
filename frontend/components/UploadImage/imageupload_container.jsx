import {connect} from 'react-redux';
import ImageUpload from './imageupload'
import {withRouter} from 'react-router-dom'
import {ClearImageError, CreateImg} from '../../actions/image_action';



const mapStateToProps = (state) =>(
    {
        currentUser: state.session.CurrentUser,
        Imageerror : state.errors.image.errors

    }
);

const mapDispatchToProps = dispatch =>(
    {
        createimg: (UserId,img) => dispatch(CreateImg(UserId,img)),
        ClearImageError: () => dispatch(ClearImageError())
    }
);

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageUpload));
