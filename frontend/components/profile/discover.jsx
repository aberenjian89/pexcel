import React from 'react'
import ProfileContainer from './profile_container'

class Discover extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ProfileContainer/>
                <h1>Discover</h1>
            </div>
        )
    }
}

export default Discover;