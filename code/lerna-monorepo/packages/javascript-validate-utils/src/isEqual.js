/**
 * 
 * 判断两个对象的值是否相同
 */
import { isObject } from "./basic";
import { _toString } from "./setup";
import Types from "./types/types";

function isObjectEqual(obj1, obj2) {
  let isObj = (isObject(obj1) && isObject(obj2));
  if (!isObj) {
    return false;
  }
  let _keys1 = Object.keys(obj1);
  let _key2 = Object.keys(obj2);
  //如果长度不相等直接返回false
  if (_keys1.length !== _key2.length) {
    return false;
  }

  for (const key in obj1) {
    if (obj2.hasOwnProperty.call(obj2, key)) {
      let obj1Type = _toString.call(obj1[key]);
      let obj2Type = _toString.call(obj2[key]);
      if(obj1Type === Types.OBJECT || obj2Type === Types.OBJECT) {
        if(!isObjectEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true; 
}


export  default isObjectEqual;
