/**
 * typeof 为object的，但是不包含null
 * @param value
 * @returns {boolean}
 */
function isObjectLike(value) {
  return typeof value === 'object' && null !== value
}

export default isObjectLike
