import {connect} from 'react-redux';
import {CreateUser} from '../../actions/session_action';
import SignUp from './signup'


const mapStateToProps = (state) =>{

};


const mapDispatchToProps = (dispatch) =>(
    {
        CreateUser: (user) => dispatch(CreateUser(user))
    }
);


export default connect(null,mapDispatchToProps)(SignUp)