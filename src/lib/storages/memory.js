export default {
  map: {},
  get: function(key) {
    if (typeof this.map[key] !== 'string') {
      return '';
    }
    return this.map[key];
  },
  set: function(key, val) {
    this.map[key] = val;
  },
  remove: function(key) {
    delete this.map[key];
  },
  support: function() {
    return true;
  },
};
