export const FetchRecentImages = () =>
  $.ajax({
    method: "GET",
    url: "api/images/landing_recent_images"
  });
