import {connect} from 'react-redux'
import {FetchHomeUserImages} from '../../actions/home_gallery'
import HomeUserGalleryComponent from './home_user_gallery_component'

const mapStateToProps = (state)=>({
    HomeGallery : state.HomeUserGallery
});


const mapDispatchToProps = dispatch =>({
    FetchHomeImages: () => dispatch(FetchHomeUserImages())
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeUserGalleryComponent)