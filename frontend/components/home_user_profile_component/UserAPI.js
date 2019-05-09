export const FetchHomeUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });

export const FetchUpdateUser = (id, data) =>
    $.ajax({
        method: "PATCH",
        url: `/api/users/${id}`,
        data: {data}
    });

export const UploadHomeUserAvatar = data =>
  $.ajax({
    method: "POST",
    url: "api/users/upload_home_user_avatar",
    contentType: false,
    processData: false,
    data: data
  });

export const RemoveHomeUserAvatar = () =>
  $.ajax({
    method: "Delete",
    url: "api/users/remove_home_user_avatar"
  });
