import React from 'react'
import {Link} from 'react-router-dom'

export const Heading = () =>(
    <div className="heading-container">
        <div className="header-content">
            <div className="header">
                <span>
                    <h1>Get inspired and share your best photos</h1>
                </span>
                <span>
                    <h2>Find your home among the world's best photographers</h2>
                </span>
                <Link to="/signup">JOIN PEXCEL</Link>
            </div>
        </div>
    </div>
);

