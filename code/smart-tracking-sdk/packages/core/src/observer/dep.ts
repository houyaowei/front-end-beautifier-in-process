/**
依赖项管理
*/
import { Watcher } from "./watcher";

export class Dep {
  subs = new Set<Watcher>();
  static target: Watcher | undefined;

  addDependency() {
    //有监控对象了，才会添加到依赖里
    if (Dep.target) {
      this.subs.add(Dep.target);
    }
  }
  notify(...params: any[]) {
    this.subs.forEach(function (watcher: any) {
      watcher.proxy.dirty = true; // 标明数据脏了,当再次使用到这个值会重新计算
      watcher.update(...params);
    });
  }
}
