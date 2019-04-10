export const UploadImages = data => {
  return $.ajax({
    method: "POST",
    url: "api/images",
    contentType: false,
    processData: false,
    data: data
  });
};
