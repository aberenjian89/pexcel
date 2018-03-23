import {connect} from 'react-redux'
import Landing from './landing'
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) =>({
    currentUser: state.session.CurrentUser
});


const mapDispatchToProps = dispatch =>({

});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Landing))


