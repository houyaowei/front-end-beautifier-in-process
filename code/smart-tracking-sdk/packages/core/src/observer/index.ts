/**
作用：SDK响应式支持（ref），watch和computed会在后面提供实现
支持的格式有：
1、ref({
  name:"xxx",
  age: "xxx",
  info: {
    address: ''
  }
})
2、ref({
  name:"xxx",
  age: "xxx",
})
3、ref(1)

*/

import { ref as refRefer } from "./ref";
import type { CompatFunc} from "../types";

function hasProxy(): boolean {
  return window.Proxy ? true : false;
}

/**
如果不支持proxy，直接返回 { value: target }的格式
*/
function ref<T>(target: T) {
  //TODO ref实现
  return hasProxy() ? refRefer<T>(target) : { value: target };
}
function computed<T>(fun: CompatFunc) {
  return hasProxy() ? _computed<T>(fun) : { value: fun() }
}