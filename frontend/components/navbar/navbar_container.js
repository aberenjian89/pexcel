import {connect} from 'react-redux'
import {ModalShow} from "../actions/modal_status_action";
import NavbarComponent from './navbar_component'

const mapStateToProps = null;


const mapDispatchToProps = dispatch =>({
    ModalShow: (type) => dispatch(ModalShow(type))
});

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)



