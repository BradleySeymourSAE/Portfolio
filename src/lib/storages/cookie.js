import cookie from 'js-cookie';
import config from 'config';

const testing = {
  key: '_f',
  val: '0',
};

export default {
  get: function(key) {
    const result = cookie.get(key, { domain: config.domain });
    if (typeof result !== 'string') {
      return '';
    }
    return result;
  },
  set: function(key, val) {
    const secure = window.location.protocol === 'https:';
    const expires = 365;
    cookie.set(key, val, { domain: config.domain, expires, secure });
  },
  remove: function(key) {
    cookie.remove(key, { domain: config.domain });
  },
  support: function() {
    this.set(testing.key, testing.val);
    return this.get(testing.key) === testing.val;
  },
};
