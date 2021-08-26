import { FETCH_RANDOM_IMAGE } from '../constants/actionTypes';

const randomImage = (image = {}, action) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE:
      return action.payload;

    default:
      return image;
  }
};

export default randomImage;
