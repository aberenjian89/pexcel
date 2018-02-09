import * as APIImage from '../utils/image_api_util'
import {fetchuser} from '../utils/session_api_util'


export const RECEIVE_IMAGE_VIEW = "RECEIVE_IMAGE_VIEW";
export const RECEIVE_IMAGE_AUTHOR = "RECEIVE_IMAGE_AUTHOR";
export const RECEIVE_IMAGE_VIEW_ERROR = "RECEIVE_IMAGE_ERROR";

export const FetchImageView = (ImageId) => dispatch => (
    APIImage.fetchimg(ImageId)
        .then((image) => dispatch(ReceiveImageView(image)),
        err => dispatch(ReceiveImageViewError(err)))
);


export const FetchAuthorImage = (authorId) => dispatch =>(
    fetchuser(authorId).then((author) => dispatch(ReceiveImageAuthor(author)),
        err => dispatch(ReceiveImageViewError(err)))
);



export const UpdateUserImg = (userId,imgId,img) => dispatch =>(
    APIImage.updateuserimg(userId,imgId,img)
        .then((image) => dispatch(ReceiveImageView(image)),
            err => dispatch(ReceiveImageViewError(err.responseJSON)))
);


const ReceiveImageAuthor = (author) =>({
    type: RECEIVE_IMAGE_AUTHOR,
    author
});

const ReceiveImageView = (image) =>(
    {
        type: RECEIVE_IMAGE_VIEW,
        image

    }
)


const ReceiveImageViewError = (error) => {
    return  {
        type: RECEIVE_IMAGE_VIEW_ERROR,
        error
    }
};


export const ClearImageError = () => dispatch => (
    dispatch(ReceiveImageViewError([]))
);
