import {connect} from 'react-redux';
import ImageGalleryGrid from './image_gallery_grid';
import {withRouter} from 'react-router-dom'
import {FetchAllImage} from '../../actions/image_action'

const mapStateToProps = (state) =>(
      {
         images : Object.values(state.entities.images)
      }
);


const mapDispatchToProps = dispatch =>(
    {
        fetchallimage: () => dispatch(FetchAllImage())
    }
);


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImageGalleryGrid));