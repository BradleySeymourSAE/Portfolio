const testing = {
  key: '_f',
  val: '0',
};

export default {
  get: function(key) {
    const result = window.sessionStorage.getItem(key);
    if (typeof result !== 'string') {
      return '';
    }
    return result;
  },
  set: function(key, val) {
    window.sessionStorage.setItem(key, val);
  },
  remove: function(key) {
    window.sessionStorage.removeItem(key);
  },
  support: function() {
    if (typeof window.Storage === 'undefined') {
      return false;
    }
    if (typeof window.sessionStorage === 'undefined') {
      return false;
    }
    this.set(testing.key, testing.val);
    return this.get(testing.key) !== testing.val;
  },
};
