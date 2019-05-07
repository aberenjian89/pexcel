export const FetchHomeUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });

export const FetchUpdateUser = id =>
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });

export const UploadHomeUserAvatar = data =>
  $.ajax({
    method: "POST",
    url: "api/users/upload_home_user_avatar",
    contentType: false,
    processData: false,
    data: data
  });
