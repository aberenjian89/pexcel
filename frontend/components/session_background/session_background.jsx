import React from 'react';
import SessionFormContainer from '../SessionForm/session_form_container'
import SignUpFormContainer from '../SignUpForm/signup_form_container'
import ProfileContainer from '../UserProfile/profile_container'

export const SessionBackground = ({match}) =>{

    let display;
    if (match.path ==='/signup'){
        display = <SignUpFormContainer/>
    }else if (match.path === '/login'){
        display = <SessionFormContainer/>
    }else{
        display = <ProfileContainer/>
    }

    return(
        <div className="background">
            {display}
        </div>
    )
};

