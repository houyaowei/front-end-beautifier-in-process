import type { ObserverValue, CompatFunc } from "../types";
import { isRef } from "./ref";
import { Watcher } from "./watcher";

function watchInvoke(callback: CompatFunc, getter: CompatFunc) {
  new Watcher("", { watch: true, callback }, getter);
}

export function watch<T>(t: ObserverValue<T>, fn: CompatFunc) {
  if (!isRef(t)) {
    return;
  }
  watchInvoke(
    (newValue: T, oldValue: T) => {
      fn(newValue, oldValue);
    },
    function () {
      return t.value;
    },
  );
}
