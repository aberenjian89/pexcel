import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Settings from './settings'


const mapStateToProps = (state,{match}) =>({

    CurrentUser : state.session.CurrentUser

});



const mapDispatchToProps = (dispatch) =>({

})



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Settings))