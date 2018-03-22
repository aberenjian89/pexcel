import {connect} from 'react-redux'
import {FetchUserImgs} from "../../actions/image_action";
import {LogoutUser} from "../../actions/session_action";
import Profile from './profile'
import {withRouter} from 'react-router-dom'


const mapStateToProps = (state,{match}) =>(
    {
        CurrentUser: state.session.CurrentUser,
        UserImgs: state.entities.imageauthor

    }
);


const mapDispatchToProps = (dispatch,{match}) =>(
    {
        FetchUserImgs: (UserId) => dispatch(FetchUserImgs(UserId)),
        Logout: () => dispatch(LogoutUser())
    }
);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Profile))