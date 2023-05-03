import axios from 'axios';
export const fetchPage = (page, searchItem) =>
  axios({
    url: 'https://pixabay.com/api/',
    params: {
      key: '34336743-d2a2c454c2eb7df7235afc475',
      q: searchItem,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });
