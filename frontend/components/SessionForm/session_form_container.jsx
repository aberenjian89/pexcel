import {connect} from 'react-redux'
import {LoginUser,CreateUser,ClearError} from "../../actions/session_action";

import SessionForm from './session_form'

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

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)