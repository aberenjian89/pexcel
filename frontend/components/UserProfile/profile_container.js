import {connect} from 'react-redux';
import Profile from './profile'
import {withRouter} from 'react-router-dom'
import {FetchUserImgs} from "../../actions/image_action";

const mapStateToProps = (state) =>{
    return {
        CurrentUser: state.session.CurrentUser,
        UserImgs : Object.values(state.entities.images)
    }
};


const mapDispatchToProps = dispatch =>{
    return {
        fetchuserimgs: (userId) => dispatch(FetchUserImgs(userId))
    }
};


export default (connect(mapStateToProps,mapDispatchToProps)(Profile))



