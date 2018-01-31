import {connect} from 'react-redux'
import {LoginUser,CreateUser} from "../../actions/session_action";
import SessionForm from './session_form'

const mapStateToProps = (state,{match})=>{

};


const mapDispatchToProps = (dispatch,{match}) =>{
    return {
        LoginUser: (user) => dispatch(LoginUser(user))
    }
};

export default connect(null,mapDispatchToProps)(SessionForm)