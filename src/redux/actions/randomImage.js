import { FETCH_RANDOM_IMAGE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators

// fetch a random image
export const getImage = () => async (dispatch) => {
  try {
    const data = await api.fetchImage();

    dispatch({ type: FETCH_RANDOM_IMAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
