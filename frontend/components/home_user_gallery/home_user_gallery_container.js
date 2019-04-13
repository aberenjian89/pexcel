import {connect} from 'react-redux'
import {FetchHomeUserImages,RemoveHomeUserImage} from '../../actions/home_gallery'
import HomeUserGalleryComponent from './home_user_gallery_component'

const mapStateToProps = (state)=>({
    HomeGallery : Object.values(state.HomeUserGallery)
});


const mapDispatchToProps = dispatch =>({
    FetchHomeImages: () => dispatch(FetchHomeUserImages()),
    RemoveHomeImage: (imageId) => dispatch(RemoveHomeUserImage(imageId))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeUserGalleryComponent)