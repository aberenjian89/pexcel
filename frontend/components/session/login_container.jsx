import {connect} from 'react-redux'
import {LoginUser, ClearError, CreateUser} from "../../actions/session_action";
import {withRouter} from 'react-router-dom'
import Login from "./login_form";



const mapStateToProps = (state,{match})=>(
    {
        errors: state.errors.session
    }
);



const mapDispatchToProps = (dispatch,{match}) =>{
    return {
        LoginUser: (user) => dispatch(LoginUser(user)),
        ClearError: () => dispatch(ClearError())
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))



