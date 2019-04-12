import {combineReducers} from 'redux'
import SessionReducer from './session_reducer'
import AuthModalReducer from './auth_modal_reducer'
import UploadModalReducer from './upload_modal_reducer'
import HomeUserGallery from './home_user_gallery_reducer'

const RootReducer =combineReducers({
    Session: SessionReducer,
    AuthModal: AuthModalReducer,
    UploadModal: UploadModalReducer,
    HomeUserGallery: HomeUserGallery
});


export default RootReducer;