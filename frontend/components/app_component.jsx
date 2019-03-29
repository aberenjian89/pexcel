import React from 'react'
import Navbar from './navbar/navbar_component'

class AppComponent extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
        <div>
            <Navbar/>
        </div>
        )
    }
}

export default AppComponent