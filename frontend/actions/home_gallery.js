import {FetchUserImages} from '../components/home_user_gallery/GalleryAPI'
export const HOME_USER_FETCH_IMAGES = "HOME_USER_FETCH_IMAGES";


const HomeUserFetchImages = (images)=>({
    type: HOME_USER_FETCH_IMAGES,
    data: images

})

export const FetchHomeUserImages = () => dispatch =>(
    FetchUserImages()
        .then((res)=>{
            debugger
            dispatch(HomeUserFetchImages(res))
        })
)







