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

export const createimg = (userId,img) => (
    $.ajax({
        method: 'POST',
        url: `api/users/${userId}`,
        data: {img}
    })
);

// Update User Image

export const updateuserimg = (userId,img) => (
    $.ajax({
        method: 'PATCH',
        url: `api/users/${userId}/images/${img.id}`,
        data : {img}
    })
);

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


