/**
 * 入口
 */
import { isString, isNumber, isArray ,isNull, isFunction, isObject, isDate,isBoolean,isUndefined} from './basic'
import isArrayLike from "./utils/isArrayLike";
import isEmpty from "./isEmpty";
import isMap from "./isMap";
import isSet from "./isSet";
import isError from "./isError";
import isSymbol from "./isSymbol";
import isRegExp from "./isRegExp";
import isKeyExist from "./isKeyExist";
import isWeakMap from "./isWeakMap";
import isWeakSet from "./isWeakSet";
import isElement from "./isElement";
import isEqual from "./isEqual"

export {
  isString,
  isNumber,
  isArray,
  isNull,
  isFunction,
  isObject,
  isDate,
  isBoolean,
  isArrayLike,
  isSet,
  isMap,
  isEmpty,
  isRegExp,
  isError,
  isSymbol,
  isKeyExist,
  isUndefined,
  isWeakMap,
  isWeakSet,
  isElement,
  isEqual
}
