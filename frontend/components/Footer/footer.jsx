import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    constructor(props){
        super(props)
    }



    render(){
        return (
            <div className="footer-container">
                <div className="footer-links">
                    <Link to="#"><i className="fab fa-github"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>
        )
    }
}


export default Footer;