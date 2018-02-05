import {connect} from 'react-redux';
import Upload from './upload'
import {withRouter} from 'react-router-dom'
import {CreateImg} from "../../../actions/image_action";



const mapStateToProps = (state) =>(
    {
        currentUser: state.session.CurrentUser
    }
);

const mapDispatchToProps = dispatch =>(
    {
        createimg: (UserId,img) => dispatch(CreateImg(UserId,img))
    }
);

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Upload));
