import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Upload from './upload';

import {CreateImg} from "../../actions/image_action";


const mapStateToProps = (state,{match}) =>(
    {
      CurrentUser: state.session.CurrentUser
    }
);
