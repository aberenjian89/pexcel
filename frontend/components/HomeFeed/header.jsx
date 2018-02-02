import React from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../Ui/Spinner'

class HomeFeed  extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div className="main-container">
                <Spinner/>
                <div className="header">
                    <div className="header-container">
                        <h3>Get inspired and share your best photos</h3>
                        <span>Find your home among the world's best photographers.</span>
                        {/*<div className="header-container-link">*/}
                            {/*<Link to="/signup">JOIN PEXCEL</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeFeed;