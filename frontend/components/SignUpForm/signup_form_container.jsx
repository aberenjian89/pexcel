import {connect} from 'react-redux';
import {CreateUser,ClearError} from '../../actions/session_action';
import {withRouter} from 'react-router-dom'
import SignUp from './signup'


const mapStateToProps = (state) =>(
    {
        errors: state.errors.session
    }
);


const mapDispatchToProps = (dispatch) =>(
    {
        CreateUser: (user) => dispatch(CreateUser(user)),
        ClearError: () => dispatch(ClearError())
    }
);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUp))