import * as APIImage from '../utils/image_api_util'
import {fetchuser} from '../utils/session_api_util'


export const RECEIVE_IMAGE_VIEW = "RECEIVE_IMAGE_VIEW";
export const RECEIVE_IMAGE_AUTHOR = "RECEIVE_IMAGE_AUTHOR";


export const FetchImageView = (ImageId) => dispatch => (
    APIImage.fetchimg(ImageId)
        .then((image) => dispatch(ReceiveImageView(image)))
);


export const FetchAuthorImage = (authorId) => dispatch =>(
    fetchuser(authorId).then((author) => dispatch(ReceiveImageAuthor(author)))
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



