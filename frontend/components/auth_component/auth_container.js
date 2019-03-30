import {connect} from 'react-redux'
import {ModalHide} from "../../actions/modal_status_action";
import AuthComponent from './auth_component'
import {APIUserLogin,APIRegisterUser,AuthClearError} from "../../actions/session_actions";

const mapStateToProps = (state)=>({
    ModalStatus: state.ModalStatus,
    AuthErrors: state.Session.errors
});


const mapDispatchToProps = dispatch =>({
    ModalHide: () => dispatch(ModalHide()),
    LoginUser: (data) => dispatch(APIUserLogin(data)),
    RegisterUser: (data) => dispatch(APIRegisterUser(data)),
    ClearAuthError: () => dispatch(AuthClearError())
});


export default connect(mapStateToProps,mapDispatchToProps)(AuthComponent)