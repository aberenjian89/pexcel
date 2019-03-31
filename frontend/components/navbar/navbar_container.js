import {connect} from 'react-redux'
import {ModalShow} from "../../actions/modal_status_action";
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
    LogOutUser: () => dispatch(APIUserLogout())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarComponent))



