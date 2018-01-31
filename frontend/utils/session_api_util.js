export const loginuser = (user) =>(
    $.ajax({
        method: 'POST',
        url: 'api/session',
        data: {user}
    })
);


export const logoutuser = (userId) =>(
  $.ajax({
      method:'DELETE',
      url: 'api/session'
  })
);