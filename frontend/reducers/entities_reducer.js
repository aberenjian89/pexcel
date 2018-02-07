import {combineReducers} from 'redux'
import ImageReducer from './image_reducer'
import ImageViewReducer from './image_view_reducer'
import ImageAuthorReducer from './image_author_reducer'

const entitiesReducer = combineReducers({
    images: ImageReducer,
    imageview : ImageViewReducer,
    imageauthor: ImageAuthorReducer
});


export default  entitiesReducer;

