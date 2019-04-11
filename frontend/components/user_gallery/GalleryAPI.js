export const FetchUserImages = ()=>(
    $.ajax({
        method: 'GET',
        url: 'api/images/user_gallery',
    })
)