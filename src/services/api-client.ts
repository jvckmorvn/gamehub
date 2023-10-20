import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5332bd1a1db24f7e8edfbf85b4ab67f0'
  }
});
