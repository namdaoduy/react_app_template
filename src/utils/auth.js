import { getItem, setItem, STORAGE_KEYS } from 'utils/storage';


class AccessToken {
  constructor() {
    this.accessToken = null;
  }

  setAccessToken(token) {
    setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }

  updateAccessToken() {
    const token = getItem(STORAGE_KEYS.ACCESS_TOKEN);
    this.accessToken = token;
    return token;
  }

  deleteAccessToken() {
    this.accessToken = null;
    setItem(STORAGE_KEYS.ACCESS_TOKEN, '');
  }

  isAuth() {
    return !!this.accessToken;
  }
}

const Auth = new AccessToken();
Auth.updateAccessToken();

export default Auth;
