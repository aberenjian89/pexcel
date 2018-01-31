import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root'


document.addEventListener("DOMContentLoaded",()=>{
    let preloadstate =undefined;
    if (window.currentUser){
        preloadstate={
            session:{
                CurrentUser: window.currentUser
            }
        }
    }
    const store = configureStore(preloadstate);
    window.store=store;
    ReactDOM.render(<Root store={store}/>
        ,document.getElementById('root'))
});