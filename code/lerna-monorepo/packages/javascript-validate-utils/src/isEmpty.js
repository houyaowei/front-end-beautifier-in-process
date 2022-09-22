import isArrayLike from "./utils/isArrayLike";
import {isArray} from "./basic";
import {isTypedArray} from "./isTypeArray";
import isArguments from "./isArguments";
import types from "./types/types";
import {getTag} from "./utils/getTag";
import isPrototype from "./isPrototype";
import {_hasOwnProperty} from "./setup";


const isEmpty = function(value) {
  if(value === null) {
    return true
  }
  if (isArrayLike(value)) {
    if (isArray(value) || typeof value === 'string' || isTypedArray(value) || isArguments(value)) {
      return !value.length
    }
  }
  //map和set。weakMap和weakSet没有size字段，不判断
  if (getTag(value) === types.MAP || getTag(value) === types.SET) {
    return !value.size
  }
  //如果传入的是对象的prototype
  if (isPrototype(value)) {
    return !Object.keys(value).length
  }
  if (Object.keys(value).length === 0) {
    return true
  }
  //判断普通对象
  for (let k in value) {
    if (k){
      if (_hasOwnProperty.call(value,k)) {
        return false
      }
    }
    return true
  }
}

export default isEmpty
