/**
 * @summary Converts a JS object to a JS array
 * @param   {Object} obj - The params object
 * @returns {Array} - The array of items
 */


 export default function objectToArray(obj){
   if (typeof obj === 'object' && obj !== null) {
     return Object.keys(obj).map((key) => obj[key]);
   }
   return [];
 }
