import {combineReducers} from 'redux'
import ImageReducer from './image_reducer'
import ImageViewReducer from './image_view_reducer'
import ImageAuthorReducer from './image_author_reducer'
import FollowReducer from './follow_reducer'

const entitiesReducer = combineReducers({
    images: ImageReducer,
    imageview : ImageViewReducer,
    imageauthor: ImageAuthorReducer,
    follow: FollowReducer,

});


export default  entitiesReducer;

