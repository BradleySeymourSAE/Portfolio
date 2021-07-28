/**
 * @summary Converts a JS object to a URL query string e.g.
 *          { a: 'foo', b: 'bar' } => 'a=foo&b=bar'
 * @param   {Object} obj - The params object
 * @returns {String} - The query string
 */

export default function objectToQueryParams(obj) {
  return Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&');
}
