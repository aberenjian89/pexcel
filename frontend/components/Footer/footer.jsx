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
                    <a href="https://github.com/aberenjian89/pexcel"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/alireza-berenjian/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        )
    }
}


export default Footer;