import qs from 'qs';

const CLIENT_ID = '6a7f41d8865b9cd';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
};
