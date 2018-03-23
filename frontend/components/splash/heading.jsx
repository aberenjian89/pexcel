import React from 'react'
import {Link} from 'react-router-dom'

class Heading extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let display;
        if (this.props.CurrentUser){
            display=(
                <Link to="/discover">Discover</Link>
            )
        }else{
            display=(
                <Link to="/signup">JOIN PEXCEL</Link>
            )
        }
        return(
            <div className="heading-container">
                <div className="header-content">
                    <div className="header">
                    <span>
                        <h1>Get inspired and share your best photos</h1>
                    </span>
                        <span>
                        <h2>Find your home among the world's best photographers</h2>
                    </span>
                        {display}
                    </div>
                </div>
            </div>
        )
    }
}

export default Heading;

