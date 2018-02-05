// Get ALL User Image

export const fetchuserimgs = (UserId) => (
  $.ajax({
      method: 'GET',
      url: `api/users/${UserId}/images`,
  })
);

// GET User Image

export const fetchuserimg = (userId,imgId) => (
  $.ajax({
      method: 'GET',
      url: `api/users/${userId}/images/${imgId}`
  })
);

// Upload Image

export const createimg = (userId,image) => (
    $.ajax({
        method: 'POST',
        url: `api/users/${userId}/images`,
        contentType: false,
        processData: false,
        data: image
    })
);

// Update User Image

export const updateuserimg = (userId,imgId,img) => {
    debugger;
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${userId}/images/${imgId}`,
        data : {img}
    })
};

// Delete User Image

export const deleteuserimg = (userId,imgId) =>(
    $.ajax({
        method: 'PATCH',
        url: `api/users/${userId}/images/${imgId}`
    })
);

// GET ALL Images

export const fetchimages = () => (
    $.ajax({
        method: 'GET',
        url: 'api/images'
    })
);

// GET Image

export const fetchimg = (imgId) => (
    $.ajax({
        method: 'GET',
        url: `api/images/${imgId}`
    })
);


