export const FetchUserImages = ()=>(
    $.ajax({
        method: 'GET',
        url: 'api/images/home_user_gallery',
    })
)


export const RemoveUserImage =(key)=>(
    $.ajax({
        method: 'DELETE',
        url: `/api/images/${key}`
    })
)