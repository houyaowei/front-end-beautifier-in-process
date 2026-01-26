import { isWindow } from "javascript-validate-utils";
import { SmartTracking } from "../types";

export function getGlobal(): Window {
  if (isWindow()) {
    return window;
  }
  return {} as Window;
}

export function getGlobalSupport(): SmartTracking {
  _global.__SmartTracking__ =
    _global.__SmartTracking__ || ({} as SmartTracking);
  return _global.__SmartTracking__;
}

//全局window对象
const _global = getGlobal();
//把功能挂载到全局对象上，方便提供更多的能力
const _support = getGlobalSupport();

export { _global, _support };
