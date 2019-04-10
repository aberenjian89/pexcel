export const UploadImages = data => {
  return $.ajax({
    method: "POST",
    url: "api/images",
    processData: false,
    data: {images: [data]}
  });
};
