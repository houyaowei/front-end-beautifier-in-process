/**
 * 用来校验 Int8Array，UInt8Array等类型。具体请见：
 * https://developer.mozilla.org/zh-CN/docs/Web/API/ArrayBufferView
 * @type {RegExp}
 */
import isObjectLike from "./utils/isObjectLike";
import {getTag} from "./utils/getTag";

const regTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
function isTypedArray(value) {
  return isObjectLike(value) && regTypedTag.test(getTag(value))
}

export {
  isTypedArray
}
