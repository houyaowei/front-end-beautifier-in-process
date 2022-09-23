/**
 * 最大值，最小值，最大安全整数，最小安全整数 参考
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number
 * @param value
 * @returns {boolean}
 */

function isLength(value) {
  return typeof value === 'number' &&
    value > -1 && value <= Number.MAX_SAFE_INTEGER
}

export default isLength
