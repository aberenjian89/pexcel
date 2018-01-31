export const loginuser = (user) =>(
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {user}
    })
);

export const logoutuser = () =>(
  $.ajax({
      method:'DELETE',
      url: 'api/session'
  })
);

export const createuser = (user) =>(
  $.ajax({
      method:'POST',
      url: 'api/users',
      data: {user}
  })
);

export const updateUser = (user) =>(
    $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: {user}
    })
);