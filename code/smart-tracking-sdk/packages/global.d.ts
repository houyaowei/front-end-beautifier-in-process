declare module "javascript-validate-utils" {
  export function isRegExp(value: string): boolean;
  export function isArray(arr: any[]): boolean;
  export function isEmpty(str: string): boolean;
  export function isWindow(): boolean;
}

declare interface Window {
  __SmartWebTracKInit__: boolean;
  __SmartTracking__: SmartTracking;
}
