import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Gallery from './gallery'
import {FetchAllImage} from "../../../actions/image_action";

const mapStateToProps = (state) =>{

   return  {

        images: Object.values(state.entities.images)
    }
};




const mapDispatchToProps = (dispatch) =>(
    {
        fetchimages: () => dispatch(FetchAllImage())
    }

);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Gallery))

