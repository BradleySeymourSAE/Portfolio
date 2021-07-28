import { Throw as check } from 'powercheck';

/**
 * @summary Extracts multiple params from a query string
 * @param   {String} keys - The params to extract
 * @param   {String} queryString - The query string from the url (includes leading ?)
 * @returns {(String|void)} - The param's value, or undefined if no param is found
 */

export default function getQueryParams(keys, queryString) {
  const results = {};

  // Keys must be an array of strings
  check(keys, [String]);

  // Remove leading `?` character and split into key=value strings
  const pairs = queryString.substr(1).split('&');

  // Iterate each pair and grab the ones we want
  for (var i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    keys.forEach((key) => {
      if (decodeURIComponent(pair[0]) === key) {
        results[key] = decodeURIComponent(pair[1]);
      }
    });
  }

  if (Object.keys(results).length === 0) return null;
  return results;
}