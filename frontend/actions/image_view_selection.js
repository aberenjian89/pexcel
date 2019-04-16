export const LANDING_IMAGE_INDEX = "LANDING_IMAGE_INDEX";
export const GALLERY_IMAGE_INDEX = "GALLERY_IMAGE_INDEX";
export const IMAGE_VIEW_MODAL_OPEN = "IMAGE_VIEW_MODAL_OPEN";
export const IMAGE_VIEW_MODAL_CLOSE = "IMAGE_VIEW_MODAL_CLOSE";

export const LandingImageIndex = index => ({
  type: LANDING_IMAGE_INDEX,
  data: index
});

export const GalleryImageIndex = index => ({
  type: GALLERY_IMAGE_INDEX,
  data: index
});

export const ModalOpen = () => ({
  type: IMAGE_VIEW_MODAL_OPEN
});

export const ModalClose = () => ({
  type: IMAGE_VIEW_MODAL_CLOSE
});
