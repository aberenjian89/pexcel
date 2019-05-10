import {connect} from 'react-redux'
import {ModalShow} from "../../actions/auth_modal";
import {UploadModalShow} from "../../actions/upload_modal";
import NavbarComponent from './navbar_component'
import {APIUserLogout} from '../../actions/session_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = (state)=>{
    let authenticate = null;
    if (state.Session.current_user){
        authenticate = true
    }else{
        authenticate = false
    }

    return {
        authenticate: authenticate
    }
};


const mapDispatchToProps = dispatch =>({
    ModalShow: (type) => dispatch(ModalShow(type)),
    UploadModalShow: () => dispatch(UploadModalShow()),
    LogOutUser: () => dispatch(APIUserLogout())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarComponent))



