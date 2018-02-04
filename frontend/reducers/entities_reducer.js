import {combineReducers} from 'redux'
import ImageReducer from './image_reducer'


const entitiesReducer = combineReducers({
    images: ImageReducer
});


export default  entitiesReducer;

