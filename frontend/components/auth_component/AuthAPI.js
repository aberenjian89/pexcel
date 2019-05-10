
export const LoginHomeUser = (data)=>(
    $.ajax({
        method: 'post',
        url: 'api/session',
        dataType: 'JSON',
        data: {data}
    })
);

export const RegisterNewUser = (data)=>(
    $.ajax({
        method: 'post',
        url: 'api/users',
        dataType: 'JSON',
        data: {data},
    })
);


export const LogOutHomeUser = (data)=>(
    $.ajax({
        method: 'delete',
        url: 'api/session',
    })
)


