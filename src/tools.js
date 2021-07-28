// console.debug = process.env.REACT_APP_DEBUG ? console.info : () => null;
//
// console.debug(
//   'Debug is active. Use `console.debug` in your code, seen only when REACT_APP_DEBUG is set',
// );

export const sleep = (time = 0) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const sample = (array) => array[Math.floor(Math.random() * array.length)];

// JOIN PATH -->
export const joinPath = (...segments) => {
  const keepNonEmpty = (string, index, arr) => {
    if (index === 0) return true;
    if (index === arr.length - 1) return true;
    return !!string;
  };

  const addSlashAfterProtocol = (x) => {
    if (x.startsWith('file') && x.endsWith(':')) return x + '//';
    if (x.endsWith(':')) return x + '/';
    return x;
  };

  return segments
    .join('/')
    .split('/')
    .filter(keepNonEmpty)
    .map(addSlashAfterProtocol)
    .join('/');
};
// --<<

// GET ROUTE PREFIX -->
export const getRoutePrefix = (hostname) => (...segments) => {
  const test =
    hostname.includes('dashboard') ||
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1');
  const prefix = test ? '' : '/dashboard/';

  return joinPath(prefix, ...segments);
};

export const prefixPath = getRoutePrefix(window.location.hostname);

// Is Blank Check
export const isBlank = (x) => {
  if (x === 0) return false;
  if (x === false) return false;
  return !x;
};

// Reject Blank Object
export const rejectBlank = (obj, result = {}) => {
  const remainder = Object.keys(obj).filter((key) => !isBlank(obj[key]));
  remainder.forEach((x) => (result[x] = obj[x]));
  return result;
};

// // https://stackoverflow.com/questions/43492826/why-does-the-browser-not-render-a-line-break-caused-by-a-trailing-newline-charac
export function fixLineBreakSpacers(content) {
  return content.slice(-1) === '\n' ? `${content}\n` : content;
}
