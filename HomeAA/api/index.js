//const DOMAIN = 'https://nvcontosohrappee.azurewebsites.net';
const DOMAIN = "http://localhost:3000"
const API_VERSION = '/api/';

const BASE_URL = DOMAIN + API_VERSION;

const PATH = {
    REGISTER: 'auth/register',
    LOGIN: 'auth/login',
    OTP: 'mobile/otp',
    VERIFY:'mobile/verify',
    USERNAME:'auth/getUsername',
  };

export {BASE_URL, PATH};
