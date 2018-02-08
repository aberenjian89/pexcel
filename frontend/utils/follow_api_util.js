export const CreateFollow=(UserId) =>(
    $.ajax({
        method: 'POST',
        url: `api/users/${UserId}/follows`
    })
);


export const DeleteFollow=(FolloweeId)=>(
    $.ajax({
        method: 'DELETE',
        url: `api/users/${FolloweeId}/follows/1`
    })
);

