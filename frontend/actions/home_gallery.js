import {FetchUserImages, RemoveUserImage} from '../components/home_user_gallery/GalleryAPI'
export const HOME_USER_FETCH_IMAGES = "HOME_USER_FETCH_IMAGES";
export const HOME_USER_REMOVE_IMAGE = "HOME_USER_REMOVE_IMAGE"


const HomeUserFetchImages = (images)=>({
    type: HOME_USER_FETCH_IMAGES,
    data: images

})

const HomeUserRemoveImage = (image)=>({
    type: HOME_USER_REMOVE_IMAGE,
    data: image
})

export const FetchHomeUserImages = () => dispatch =>(
    FetchUserImages()
        .then((res)=>{
            dispatch(HomeUserFetchImages(res))
        })
)

export const RemoveHomeUserImage = (image)=> dispatch => (
    RemoveUserImage(image)
        .then((res) =>{
            dispatch(HomeUserRemoveImage(res))
        })
);







