import cookieStorage from './storages/cookie';
import windowNameStorage from './storages/windowname';
import localStorage from './storages/localstorage';
import sessionStorage from './storages/sessionstorage';
import memoryStorage from './storages/memory';

const storages = [cookieStorage, windowNameStorage, localStorage, sessionStorage, memoryStorage];

export default (() => {
  for (const storage of storages) {
    if (storage.support()) {
      return storage;
    }
  }
  return memoryStorage;
})();
