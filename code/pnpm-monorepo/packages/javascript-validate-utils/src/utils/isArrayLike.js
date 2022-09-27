import isLength from '../isLength'

/**
 * typeof 为object的，但是不包含null
 * @param value
 * @returns {boolean}
 */
function isArrayLike(value) {
  return value != null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike
