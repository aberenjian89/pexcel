import {connect} from 'react-redux'
import ProfileComponent from './profile_component'

const mapStateToProps = (state) =>({
    CurrentUser: state.Session.current_user,
})



const mapDispatchToProps = (dispatch)=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(ProfileComponent)
