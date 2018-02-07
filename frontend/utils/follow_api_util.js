export const CreateFollow=(followeeId) =>(
    $.ajax({
        method: 'POST',
        url: `api/users/`${followeeId}`/follows`
    })
);


export const DeleteFollow=(followeeId)=>(
    $.ajax({
        method: 'DELETE',
        url: `api/users/`${followeeId}`/follows`
    })
);

