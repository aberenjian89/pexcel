import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../reducer/root_reducer'
import logger from 'redux-logger'

const middleware = [thunk];


// if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)

    middleware.push(logger);
// }


const configureStore=(preloadedstate={})=>(
    createStore(
        RootReducer,
        preloadedstate,
        applyMiddleware(...middleware)
    )
);


export default configureStore;
