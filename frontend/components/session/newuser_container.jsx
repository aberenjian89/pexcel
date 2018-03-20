import {connect} from 'react-redux'
import {ClearError, CreateUser} from "../../actions/session_action";
import {withRouter} from 'react-router-dom'
import Newuser from "./newuser_form";



const mapStateToProps = (state,{match})=>(
    {
        errors: state.errors.session
    }
);



const mapDispatchToProps = (dispatch,{match}) =>{
    return {
        CreateUser: (user) => dispatch(CreateUser(user)),
        ClearError: () => dispatch(ClearError())
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Newuser))


