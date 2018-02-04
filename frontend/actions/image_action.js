import * as APIImage from '../utils/image_api_util'

export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";



export const FetchUserImgs = (UserId) => dispatch =>(
    APIImage.fetchuserimgs(UserId)
        .then((images) => dispatch(ReceiveAllImages(images)))
);


export const FetchUserImg = (userId,imgId) => dispatch =>(
    APIImage.fetchuserimg(userId,imgId)
        .then((img) => dispatch(ReceiveImage(img)))
);

export const CreateImg = (userId,img) => dispatch =>(
  APIImage.createimg(userId,img)
      .then((image) => dispatch(ReceiveImage(image)))
);

export const UpdateUserImg = (userId,img) => dispatch =>(
    APIImage.updateuserimg(userId,img)
        .then((image) => dispatch(ReceiveImage(image)))
);

export const DeleteUserImg = (uesrId,imgId) => dispatch =>(
    APIImage.deleteuserimg(userId,imgId)
        .then(() => dispatch(RemoveImage(imgId)))
);

export const FetchAllImage = () => dispatch =>(
    APIImage.fetchimages()
        .then((images) => dispatch(ReceiveAllImages(images)))
);


export const FetchImg = (imgId) => dispatch =>(
    APIImage.fetchimg(imgId)
        .then((image) => dispatch(ReceiveImage(image)))
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





