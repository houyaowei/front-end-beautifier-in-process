import { _global } from "./src/utils/global";
import { initOptions } from "./src/libs/options";
import type { InitOptions, SmartTracking } from "./src/types";

//TODO,把这里定义到global.d.ts中__SmartWebTracKInit__属性仍然报错
declare global {
  interface Window {
    __SmartWebTracKInit__: boolean;
    __SmartTracking__: SmartTracking;
  }
}
/**
 * sdk入口
 * @param options
 * @returns
 */
function init(options: InitOptions) {
  if (_global.__SmartWebTracKInit__) return;
  if (!initOptions(options)) return;

  //初始化过程

  _global.__SmartWebTracKInit__ = true;
}

export { init };
