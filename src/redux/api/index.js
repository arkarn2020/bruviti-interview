import axios from 'axios';

const API = axios.create({
  baseURL: 'https://source.unsplash.com',
});

export const fetchImage = () => API.get('/user/c_v_r');
