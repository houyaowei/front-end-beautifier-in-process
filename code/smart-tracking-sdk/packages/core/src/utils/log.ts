import { options } from "../libs/options";

export function logError(...args: any[]) {
  console.error("@smart-tracking-sdk:", ...args);
}

export function logInfo(...args: any[]) {
  if (options.value.debug) {
    console.log("@smart-tracking-sdk:", ...args);
  }
}
