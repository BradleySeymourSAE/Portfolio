export default {
  get: function(key) {
    let obj = {};
    try {
      obj = JSON.parse(window.name);
    } catch (_) {}
    if (typeof obj[key] !== 'string') {
      return '';
    }
    return obj[key];
  },
  set: function(key, val) {
    let obj = {};
    try {
      obj = JSON.parse(window.name);
    } catch (_) {}
    obj[key] = val;
    window.name = JSON.stringify(obj);
  },
  remove: function(key) {
    let obj = {};
    try {
      obj = JSON.parse(window.name);
    } catch (_) {}
    delete obj[key];
    window.name = JSON.stringify(obj);
  },
  support: function() {
    return typeof window.name !== 'undefined';
  },
};
