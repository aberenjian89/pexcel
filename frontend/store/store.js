import {createStore,applyMiddleware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const configureStore=(preloadedstate={})=>(
    createStore(
        RootReducer,
        preloadedstate,
        applyMiddleware(thunk,logger)
    )
);


export default configureStore;