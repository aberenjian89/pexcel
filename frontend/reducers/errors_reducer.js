import SessionErrorsReducer from './session_errors_reducer'
import {combineReducers} from 'redux'
import ImageErrorReducer from "./image_error_reducer";
import ImageViewErrorReducer from "./Image_view_error_reducer";

const ErrorsReducer = combineReducers({
    session: SessionErrorsReducer,
    image: ImageErrorReducer,
    imageview: ImageViewErrorReducer
});


export default ErrorsReducer;