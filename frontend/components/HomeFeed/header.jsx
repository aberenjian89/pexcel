import React from 'react'
import {Link} from 'react-router-dom'

class HomeFeed  extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className="main-container">
                <div className="header">
                    <h3>Get inspired and share your best photos</h3>
                    <span>Find your home among the world's best photographers.</span>
                    <Link to="/signup">Join Us</Link>
                </div>
            </div>
        )
    }
}


export default HomeFeed;