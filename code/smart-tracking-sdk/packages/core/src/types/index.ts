/**
类型定义
*/

import type { EventBus } from "../libs/eventBus";

/**
 * 初始化参数:
 target: 上报地址
 appName：应用名称
 appCode: 应用代码
 appVersion: 应用版本
 userId：用户id
 debug：是否开启console输出
 ext: 上报的额外数据
 */
export type InitOptions = {
  target: string;
  appName: string;
  appCode?: string;
  appVersion?: string;
  userId?: string;
  debug?: boolean;
  ext?: {
    [key: string]: any;
  };
  beforeSendData?: CompatFunc; //数据上报前hook
  afterSendData?: CompatFunc; //数据上报后的hook
};

/**
 * 参数暂时和InitOptions一致，为了防止后面版本不一致，先独立出来
 */
export type SDKOptions = {
  target: string;
  appName: string;
  appCode?: string;
  appVersion?: string;
  userId?: string;
  debug?: boolean;
  ext?: {
    [key: string]: any;
  };
  beforeSendData?: CompatFunc; //数据上报前hook
  afterSendData?: CompatFunc; //数据上报后的hook
};

//类型默认是any，具体类型需要传入
export type SpecObj<T = any> = {
  [key: string]: T;
};

//兼容方法类型
export type CompatFunc = {
  (...args: any[]): any;
};

export type ObserverValue<T> = {
  value: T;
};

export type Proxy = {
  value: any;
  dirty: boolean;
};

/**
 * watcher option
 */
export type WatcherOptions = {
  computed?: boolean;
  watch?: boolean;
  callback?: CompatFunc;
};

export type SmartTracking = {
  eventBus: EventBus;
  baseInfo: BaseInfo;
  sendData: any;
  lineStatus: any;
  options: ObserverValue<SDKOptions>; // 配置信息
  firstScreen?: any; // 首屏信息
  intersection?: any; // 曝光采集
};

// export interface SdkWindow extends Window {
//   __SmartWebTracKInit__: boolean;
// }
export interface SendData {
  baseInfo: object
  eventInfo: unknown[]
}