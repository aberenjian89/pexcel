export const FETCH_LANDING_IMAGE = "FETCH_LANDING_IMAGE";
import { FetchRecentImages } from "../components/landing_component/LandingAPI";

export const FetchLandingImage = images => ({
  type: FETCH_LANDING_IMAGE,
  data: images
});

export const LandingFetchImages = () => dispatch => {
  FetchRecentImages().then(res => {
    dispatch(FetchLandingImage(res));
  });
};
