export const UPLOAD_MODAL_SHOW = "UPLOAD_MODAL_SHOW";
export const UPLOAD_MODAL_HIDE = "UPLOAD_MODAL_HIDE";

import { FetchUserImages } from "../components/home_user_gallery/GalleryAPI";

export const UploadModalShow = () => ({
  type: UPLOAD_MODAL_SHOW
});

export const UploadModalHide = () => ({
  type: UPLOAD_MODAL_HIDE
});
