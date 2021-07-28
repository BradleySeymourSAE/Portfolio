const testing = {
  key: '_f',
  val: '0',
};

export default {
  get: function(key) {
    const result = window.localStorage.getItem(key);
    if (typeof result !== 'string') {
      return '';
    }
    return result;
  },
  set: function(key, val) {
    window.localStorage.setItem(key, val);
  },
  remove: function(key) {
    window.localStorage.removeItem(key);
  },
  support: function() {
    if (typeof window.Storage === 'undefined') {
      return false;
    }
    if (typeof window.localStorage === 'undefined') {
      return false;
    }
    this.set(testing.key, testing.val);
    return this.get(testing.key) !== testing.val;
  },
};
