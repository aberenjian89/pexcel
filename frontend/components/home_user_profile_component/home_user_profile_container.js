import {connect} from 'react-redux'
import HomeProfileUserComponent from './home_user_profile_component'

const mapStateToProps = (state) =>({
    CurrentUser: state.Session.current_user,
})



const mapDispatchToProps = (dispatch)=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(HomeProfileUserComponent)
