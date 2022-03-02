import axios from "axios";

const KEY = 'AIzaSyCplfKU-qgCQQwIsQ2o5QNV_e-DCTP2LOQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});