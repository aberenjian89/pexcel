import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {FetchUserImgs} from "../../actions/image_action";
import Gallery from "./gallery";



const mapStateToProps = (state,{match}) =>(
    {
        CurrentUser: state.session.CurrentUser,
        UserImgs: state.entities.imageauthor

    }
);


const mapDispatchToProps = (dispatch,{match}) =>(
    {
        FetchUserImgs: (UserId) => dispatch(FetchUserImgs(UserId))
    }
);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Gallery))