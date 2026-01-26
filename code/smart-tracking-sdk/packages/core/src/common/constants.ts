/**
 * 要上报的事件类型
 */
export enum SEND_EVENT_TYPES {
  PAGE = "page", // 页面跳转，主要记录pv操作
  PAGE_DURATION = "pageDuration", // 页面停留时长
  CLICK = "click", // 点击事件
  ERROR = "error", // 错误事件
  PERFORMANCE = "performance", // 性能事件
  UNLOAD = "unload", // 页面卸载
  INTERSECTION = "intersection", // 曝光事件
  CUSTOM = "custom", //自定义事件
}

/**
 * 发送事件的id，用来后续的数据分析
 */
export enum SEND_EVENT_IDS {
  PAGE = "page", // 页面
  RESOURCE = "resource", // 资源
  SERVER = "server", // 请求
  CODE = "code", // code
  REJECT = "reject", // reject
  CONSOLEERROR = "console.error",
}
/**
 * 事件类型
 */
export enum EVENT_TYPES {
  ERROR = "error", //window.onerror 或者是 new Error
  CONSOLEERROR = "consoleError", //console.error
  UNHANDLEDREJECTION = "unhandledrejection", //promise
  CLICK = "click",
  LOAD = "load",
  BEFOREUNLOAD = "beforeunload", //页面卸载
  FETCH = "fetch",
  XHROPEN = "xhr-open",
  XHRSEND = "xhr-send",
  HASHCHANGE = "hashchange",
  HISTORYPUSHSTATE = "history-pushState",
  HISTORYREPLACESTATE = "history-replaceState",
  POPSTATE = "popstate", //浏览器的前进后退
  READYSTATECHANGE = "readystatechange", //xhr
}
