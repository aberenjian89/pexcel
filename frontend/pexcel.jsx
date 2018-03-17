import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


import {FetchImg} from "./actions/image_action";



document.addEventListener("DOMContentLoaded",()=>{
    let preloadstate =undefined;
    if (window.currentUser){
        preloadstate={
            session:{
                CurrentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadstate);
    window.store=store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.FetchImg = FetchImg;
    ReactDOM.render(<Root store={store}/>
        ,document.getElementById('root'));
});