/**
 * 判断三种情况：
 * 1、Object构造方法创建的对象，如：Object.create
 * 2、带有[[prototype]],即对象实例
 * 3、null
 */
import types from "../types/types";
import {getTag} from "./getTag";
import isObjectLike from "./isObjectLike";


function isPlainObject(value) {
  //不是对象
  if (!isObjectLike(value) || !(getTag(value) === types.OBJECT)) {
    return false
  }
  // Object.create(null)
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}
export default isPlainObject
