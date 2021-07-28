import localStorage from './storages/localstorage';

const TOKEN_KEY_NAME = 'authToken';


const Authentication = {
  key() {
     return `${TOKEN_KEY_NAME}`;
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  authenticate(token, expires = 365) {
    if (token) {
      localStorage.set(this.key(), token);
    }
  },

  getToken() {
    return localStorage.get(this.key());
  },

  logOut() {
    localStorage.remove(this.key());
  },
};

export default Authentication;
