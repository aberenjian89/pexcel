import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import RootComponent from './components/root_component'

document.addEventListener("DOMContentLoaded",()=>{
    let preloadstate =undefined;
    if (window.currentUser){
        preloadstate={
            Session:{
                current_user: window.currentUser
            }
        };
    }
    const store = configureStore(preloadstate);
    window.store=store;
    window.getState = store.getState;
    ReactDOM.render(<RootComponent store={store}/>,document.getElementById('root'))
});