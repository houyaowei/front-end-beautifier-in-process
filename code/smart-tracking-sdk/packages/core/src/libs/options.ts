/**
作用：初始化options操作相关，包括初始化、验证、参数合并
*/

import type { SDKOptions, InitOptions, ObserverValue } from "../types";
import { deepPropMerge, showType } from "../utils/index";
import { isEmpty } from "javascript-validate-utils";
import { logError, logInfo } from "../utils/log";
import { ref } from "../observer/ref";

class Options implements SDKOptions {
  target = "";
  appName = "";
  appCode = "";
  appVersion = "";
  userId = "";
  debug = false; //默认不输出
  ext = {};
  beforeSendData = function () {};
  afterSendData = function () {};

  constructor(options: InitOptions) {
    //TODO,待扩展
    const _options = this.transformOptions(options);
  }

  //转换options
  private transformOptions(options: InitOptions) {
    const { beforeSendData, afterSendData } = options;
    const _options = deepPropMerge<InitOptions>({}, this, options);
    if (beforeSendData) {
      _options.beforeSendData = beforeSendData;
    }
    if (afterSendData) {
      _options.afterSendData = afterSendData;
    }
  }
}

/**
 * 检查必填项，内部调用
 */
function _validateTargetMustNotEmpty(value: any, keyName: string): boolean {
  if (isEmpty(value)) {
    logError(`请检查参数[${keyName}]`);
    return false;
  }
  return true;
}

/**
 * 检查必填项
 */
function validateTargetMustNotEmpty(options: InitOptions): boolean {
  const validateResultList = [
    _validateTargetMustNotEmpty(options.target, "target"),
    _validateTargetMustNotEmpty(options.appName, "appName"),
  ];
  return validateResultList.every((item) => item == true);
}
/**
 * 检查字段类型是否正确
 */
function validateTargetType(
  value: any,
  keyName: string,
  expectType: string,
): boolean | void {
  if (!value && showType(value) == expectType) {
    return true;
  } else {
    logError(
      `TypeError:[${keyName}]期望${expectType}类型，当前是${showType(
        value,
      )}类型`,
    );
  }
}

/**
 * 验证options参数的数据格式，如果不正确需要error提示
 */
function validateOptions(options: InitOptions) {
  const {
    target,
    appName,
    appCode,
    appVersion,
    userId,
    debug,
    ext,
    beforeSendData,
  } = options;
  const validateResultList = [
    validateTargetType(appCode, "appCode", "string"),
    validateTargetType(appVersion, "appVersion", "string"),
    validateTargetType(userId, "appVersion", "string"),
    validateTargetType(debug, "debug", "boolean"),
    validateTargetType(ext, "ext", "object"),
    validateTargetType(beforeSendData, "beforeSendData", "function"),
  ];
  return validateResultList.every((res) => res == true);
}

export let sdkOptions: ObserverValue<InitOptions>;

export function initOptions(options: InitOptions) {
  if (!validateTargetMustNotEmpty(options) || !validateOptions(options)) {
    return;
  }
  sdkOptions = ref(new Options(options));
  return true;
}
