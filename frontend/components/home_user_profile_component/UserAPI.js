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
