import {connect} from 'react-redux'
import Navbar from './navbar'
import {LoginUser,LogoutUser,CreateUser} from "../../actions/session_action";
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state) =>(
    {
        currentUser: state.session.CurrentUser
    }
);

const maDispathcToProps = (dispatch) =>(
    {
        loginuser: (user) => dispatch(LoginUser(user)),
        logoutuser: () => dispatch(LogoutUser()),
        createuser: (user) => dispatch(CreateUser(user))
    }
);


export default withRouter(connect(mapStateToProps,maDispathcToProps)(Navbar))