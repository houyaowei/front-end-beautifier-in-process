import type { ObserverValue, CompatFunc } from "../types";
import { isRegExp } from "javascript-validate-utils";
import { Dep } from "./dep";

function createHandlers(
  getCB: CompatFunc,
  setCB: CompatFunc,
): ProxyHandler<ObserverValue<any>> {
  const proxyCache = new WeakMap<ObserverValue<any>, any>();

  const handlers: ProxyHandler<ObserverValue<any>> = {
    get(target, key: string, receiver) {
      const value = Reflect.get(target, key, receiver);
      getCB && getCB();
      if (typeof value === "object" && value !== null && !isRegExp(value)) {
        let proxy = proxyCache.get(value).get(value);
        if (!proxy) {
          proxy = new Proxy(value, handlers);
          //每个value暂存proxy
          proxyCache.set(value, proxy);
        }
        return proxy;
      }
      return value;
    },
    set(target, key: string, value, receiver) {
      const oldValue = Reflect.get(target, key, receiver);
      if (oldValue === value) return oldValue;
      const beforeTarget = JSON.parse(JSON.stringify(target));
      const result = Reflect.set(target, key, value, receiver);
      setCB && setCB(beforeTarget);
      return result;
    },
  };
  return handlers;
}

class Observer<T> {
  target: ObserverValue<T>;
  constructor(v: ObserverValue<T>) {
    this.target = v;
  }
  definedReactive() {
    const dep = new Dep();
    const handlers = createHandlers(
      () => {
        dep.addDependency(); //get 添加依赖
      },
      () => {
        dep.notify();
      },
    );
    return new Proxy(this.target, handlers);
  }
}

export function ref<T>(target: T) {
  const newTarget: any = {
    value: target,
  };
  //设置状态
  newTarget.isReactive = true;
  const _observerObj = new Observer<T>(newTarget);
  const proxy = _observerObj.definedReactive();
  return proxy;
}

//判断是否是响应式对象
export function isRef(ref: any) {
  return ref.isReactive == true;
}
