

//
import { isRegExp, isArray } from "javascript-validate-utils";
import type { SpecObj, CompatFunc } from "../types/index";

/**
   参数合并
*/
export function deepPropMerge<T>(target: SpecObj, ...props: SpecObj[]) {
  props.forEach((prop) => {
    for (const key in prop) {
      if (prop[key] !== null && isRegExp(prop[key])) {
        target[key] = prop[key];
      } else if (prop[key] !== null && typeof prop[key] === "object") {
        // 如果当前 key 对应的值是一个对象或数组，则进行递归
        target[key] = deepPropMerge(
          target[key] || (isArray(prop[key]) ? [] : {}),
          prop[key],
        );
      } else {
        // 如果当前 key 对应的值是基本类型数据，则直接赋值
        target[key] = prop[key];
      }
    }
  });
  return target as T;
}

export function showType(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}

/**
 * 事件绑定
 */
export function eventOn(
  target: Window | Document,
  eventName: string,
  handler: CompatFunc,
  option = false,
): void {
  target.addEventListener(eventName, handler, option);
}
/**
 * 发送数据方式 - navigator.sendBeacon
 */
export function sendByBeacon(url: string, data: any) {
  return navigator.sendBeacon(url, JSON.stringify(data))
}

export const sendReaconImageList: any[] = []

/**
 * 发送数据方式 - image
 */
export function sendByImage(url: string, data: any): Promise<void> {
  return new Promise(resolve => {
    const beacon = new Image()
    beacon.src = `${url}?v=${encodeURIComponent(JSON.stringify(data))}`
    sendReaconImageList.push(beacon)
    beacon.onload = () => {
      // 发送成功
      resolve()
    }
    beacon.onerror = function () {
      // 发送失败
      resolve()
    }
  })
}

/**
 * 发送数据方式 - xml
 */
export function sendByXML(url: string, data: any): Promise<void> {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('post', url)
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(data))
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve()
      }
    }
  })
}
/**
 * 可以理解为异步执行
 * requestIdleCallback 是浏览器空闲时会自动执行内部函数
 * requestAnimationFrame 是浏览器必须执行的
 * 关于 requestIdleCallback 和  requestAnimationFrame 可以参考 https://www.cnblogs.com/cangqinglang/p/13877078.html
 */
export const nextTime =
    window.requestIdleCallback ||
    window.requestAnimationFrame ||
    ((callback:any) => setTimeout(callback, 17))

/**
 * 取消异步执行
 */
export const cancelNextTime =
    window.cancelIdleCallback || window.cancelAnimationFrame || clearTimeout

const arrayMap =
    Array.prototype.map ||
    function polyfillMap(this: any, fn) {
      const result = []
      for (let i = 0; i < this.length; i += 1) {
        result.push(fn(this[i], i, this))
      }
      return result
    }
/**
 * map方法
 * @param arr 源数组
 * @param fn 条件函数
 * @returns
 */
export function map(arr: any[], fn: CompatFunc) {
  return arrayMap.call(arr, fn)
}

export function typeofAny(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

export function randomBoolean(randow: number) {
  return Math.random() <= randow
}
export function getTimestamp(): number {
  return Date.now()
}
export function isObjectOverSizeLimit(
    object: object,
    limitInKB: number
): boolean {
  const serializedObject = JSON.stringify(object)
  const sizeInBytes = new TextEncoder().encode(serializedObject).length
  const sizeInKB = sizeInBytes / 1024
  return sizeInKB > limitInKB
}

export function executeFunctions(
    funList: CompatFunc[],
    through: boolean,
    args: any
): any {
  if (funList.length === 0) return args

  let result: any = undefined
  for (let i = 0; i < funList.length; i++) {
    const func = funList[i]
    if (i === 0 || through) {
      result = func(args)
    } else {
      result = func(result)
    }
  }
  return result
}

export function deepAssign<T>(target: CompatFunc, ...sources: CompatFunc[]) {
  sources.forEach(source => {
    for (const key in source) {
      if (source[key] !== null && isRegExp(source[key])) {
        target[key] = source[key]
      } else if (source[key] !== null && typeof source[key] === 'object') {
        // 如果当前 key 对应的值是一个对象或数组，则进行递归
        target[key] = deepAssign(
            target[key] || (isArray(source[key]) ? [] : {}),
            source[key]
        )
      } else {
        // 如果当前 key 对应的值是基本类型数据，则直接赋值
        target[key] = source[key]
      }
    }
  })
  return target as T
}