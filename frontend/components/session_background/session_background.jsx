import React from 'react';
import SessionFormContainer from '../SessionForm/session_form_container'
import SignUpFormContainer from '../SignUpForm/signup_form_container'
import ProfileContainer from '../UserProfile/profile_container'
import ImageViewContainer from '../ImageView/imageview_container'
import ImageUploadContainer from '../UploadImage/imageupload_container'


export const SessionBackground = ({match}) =>{

    let display;
    if (match.path ==='/signup'){
        display = <SignUpFormContainer/>
    }else if (match.path === '/login'){
        display = <SessionFormContainer/>
    }else if (match.path === '/profile'){
        display = <ProfileContainer/>
    }else if (match.path === '/image/:image_id'){
        display = <ImageViewContainer/>
    }else{
        display = <ImageUploadContainer/>
    }

    return(
        <div className="background">
            {display}
        </div>
    )
};

