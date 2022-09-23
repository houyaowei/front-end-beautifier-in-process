
import {getTag} from "./utils/getTag";
import types from "./types/types";
import isPrototype from "./isPrototype";
import {isObject} from "./basic";

const isKeyExist = function (value, key) {
  if(value === null) {
    return false
  }
  //map和set。weakMap和weakSet没有size字段，不判断
  if (getTag(value) === types.MAP || getTag(value) === types.SET) {
    return value.has(key)
  }
  //prototype和普通对象做统一处理
  if (isPrototype(value) || isObject(value) ) {
    return value[key] !== undefined ? true: false
  }
  if (Object.keys(value).length === 0) {
    return false
  }
}

export default isKeyExist
