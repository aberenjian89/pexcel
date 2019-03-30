import {connect} from 'react-redux'
import {ModalHide} from "../actions/modal_status_action";
import AuthComponent from './auth_component'

const mapStateToProps = (state)=>({
    ModalStatus: state.ModalStatus
});


const mapDispatchToProps = dispatch =>({
    ModalHide: ()=> dispatch(ModalHide())
})


export default connect(mapStateToProps,mapDispatchToProps)(AuthComponent)