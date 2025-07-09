'use strict';

const API_URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://bookify-fnct.onrender.com';

window.API_URL = API_URL;
