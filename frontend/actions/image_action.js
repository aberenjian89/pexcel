import * as APIImage from '../utils/image_api_util'
export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";
export const RECEIVE_IMAGE_ERROR = "RECEIVE_IMAGE_ERROR";


export const FetchUserImgs = (UserId) => dispatch =>(
    APIImage.fetchuserimgs(UserId)
        .then((images) => dispatch(ReceiveAllImages(images)),
        err => dispatch(ReceiveImageError(err.responseJSON)))
);


export const FetchUserImg = (userId,imgId) => dispatch =>(
    APIImage.fetchuserimg(userId,imgId)
        .then((img) => dispatch(ReceiveImage(img)),
            err => dispatch(ReceiveImageError(err.responseJSON)))
);

export const CreateImg = (userId,img) => dispatch =>(
  APIImage.createimg(userId,img)
      .then((image) => dispatch(ReceiveImage(image)),
          err => dispatch(ReceiveImageError(err.responseJSON)))
);

export const UpdateUserImg = (userId,imgId,img) => dispatch =>(
    APIImage.updateuserimg(userId,imgId,img)
        .then((image) => dispatch(ReceiveImage(image)),
            err => dispatch(ReceiveImageError(err.responseJSON)))
);

export const DeleteUserImg = (userId,imgId) => dispatch =>(
    APIImage.deleteuserimg(userId,imgId)
        .then(() => dispatch(RemoveImage(imgId)),
            err => dispatch(ReceiveImageError(err.responseJSON)))
);

export const FetchAllImage = () => dispatch =>(
    APIImage.fetchimages()
        .then((images) => dispatch(ReceiveAllImages(images)),
            err => dispatch(ReceiveImageError(err.responseJSON)))
);


export const FetchImg = (imgId) => dispatch =>(
    APIImage.fetchimg(imgId)
        .then((image) => dispatch(ReceiveImage(image)),
            err => dispatch(ReceiveImageError(err.responseJSON)))
);



const ReceiveAllImages = (images) => ({
    type: RECEIVE_ALL_IMAGES,
    images
});

const ReceiveImage = (image) =>({
    type: RECEIVE_IMAGE,
    image
});

const RemoveImage = (imgId) => ({
    type: REMOVE_IMAGE,
    imgId
});


const ReceiveImageError = (error) => {
   return  {
        type: RECEIVE_IMAGE_ERROR,
        error
    }
};


export const ClearImageError = () => dispatch => (
    dispatch(ReceiveImageError([]))
);






