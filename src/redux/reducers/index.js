import { combineReducers } from 'redux';
import randomImage from './randomImage';

export const reducers = combineReducers({
  image: randomImage,
});
