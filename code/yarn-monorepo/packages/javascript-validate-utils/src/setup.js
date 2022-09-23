/**
 * js中原始属性或者方法
 */
const _objectProto = Object.prototype
const _hasOwnProperty = _objectProto.hasOwnProperty
const _toString = _objectProto.toString;

export {
  _hasOwnProperty,
  _objectProto,
  _toString
}
