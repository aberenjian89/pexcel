import React from 'react';
import SessionFormContainer from '../SessionForm/session_form_container'
import SignUpFormContainer from '../SignUpForm/signup_form_container'

export const SessionBackground = ({match}) =>{

    let display;
    if (match.path ==='/signup'){
        display = <SignUpFormContainer/>
    }else{
        display = <SessionFormContainer/>
    }

    return(
        <div className="session_parent">
            {display}
        </div>
    )
};

