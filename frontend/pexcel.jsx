import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded",()=>{
    // let preloadstate =undefined;
    // if (window.currentUser){
    //     preloadstate={
    //         session:{
    //             CurrentUser: window.currentUser
    //         }
    //     };
    // }
    // const store = configureStore(preloadstate);
    // window.store=store;
    // window.dispatch = store.dispatch;
    // window.getState = store.getState;
    // window.FetchImg = FetchImg;
    // ReactDOM.render(<Root store={store}/>
    //     ,document.getElementById('root'));
    ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'))
});