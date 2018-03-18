import {connect} from 'react-redux'
import {LoginUser,CreateUser,ClearError} from "../../actions/session_action";
import {withRouter} from 'react-router-dom'
import Auth from './auth'


const mapStateToProps = (state,{match})=>(
    {
        errors: state.errors.session
    }
);

const mapDispatchToProps = (dispatch,{match}) =>{
    return {
        LoginUser: (user) => dispatch(LoginUser(user)),
        CreateUser: (user) => dispatch(CreateUser(user)),
        ClearError: () => dispatch(ClearError())
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auth))
