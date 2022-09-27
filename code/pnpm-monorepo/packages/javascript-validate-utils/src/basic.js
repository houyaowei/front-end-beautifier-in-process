/**
 * 验证基本类型
 */

import types from './types/types'
import isObjectLike from "./utils/isObjectLike";
import { getTag } from "./utils/getTag";
/**
 * 判断是字符串
 * 需要注意的是，如果含有反义字符"\"并且是非末尾的时候，indexof的时候服务索引该字符
 * @param str
 * @returns {boolean}
 */
const isString = (str) => {
  if (!str) {
    return false
  }
  const type = typeof str
  return type == 'string' ||  getTag(str) === types.STRING
}
const isNumber = (value) => {
  if (!value) {
    return false
  }
  const type = typeof value

  return type=='number' || Number(value) ||  getTag(value) === types.NUMBER
}
const isArray = (arr) => {
  if (!arr) {
    return false
  }
  const type = typeof arr

  return type =='object' && (Array.isArray(arr) ||  getTag(arr) === types.ARRAY)
}
const isNull = (value) => {
  const type = typeof value
  return type =='object' && ( getTag(value) === types.NULL)
}
const isFunction = (fun) => {
  if (!fun) {
    return false
  }
  const type = typeof fun
  return type =='function' && ( getTag(fun) === types.FUNCTION)
}
const isObject = (value) => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}
/**
 * 是Date实例或者是标准的Date字符串'2022-1-21 12:24:11'
 */
const isDate = (value) => {
  if (isString(value)) {
    const d = new Date(value)
    return d instanceof Date && !isNaN(d.getTime()) ? true:false
  }
  return isObjectLike(value) && getTag(value) === types.DATE
}
const isBoolean = (value) => {
  return value === true || value === false ||
    (isObjectLike(value) && getTag(value) == types.BOOLEAN)
}
const isUndefined = (value) => {
  return value === undefined || getTag(value) === types.UNDEFINED
}
export {
  isString,
  isNumber,
  isArray,
  isNull,
  isFunction,
  isObject,
  isDate,
  isBoolean,
  isUndefined
}
