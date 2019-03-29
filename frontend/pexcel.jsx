import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import RootComponent from './components/root_component'

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
    // window.store=store;
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    // window.FetchImg = FetchImg;
    // ReactDOM.render(<Root store={store}/>
    //     ,document.getElementById('root'));
    ReactDOM.render(<RootComponent store={store}/>,document.getElementById('root'))
});