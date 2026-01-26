/**
观察者，在dep中添加的就是该对象
另外，待实现的计算属性computed也是通过watcher添加到依赖项中
*/
import { Dep } from "./dep";
import type { Proxy, CompatFunc, WatcherOptions } from "../types";

//要监控的目标集合
const targetStack: Watcher[] = [];

function pushTarget(_target: Watcher) {
  if (_target) {
    targetStack.push(_target);
  }
  Dep.target = _target;
}
function popTarget() {
  Dep.target = targetStack.pop();
}

export class Watcher {
  vm: any;
  computed: boolean; //预留
  watch: boolean; //预留
  proxy: Proxy; //缓存当前值，
  dep: Dep | undefined;
  getter: CompatFunc | undefined;
  callback: CompatFunc | undefined;

  constructor(vm: any, options: WatcherOptions, getter?: CompatFunc) {
    //TODO,从WatcherOptions中取 watch，computed和callback，这些参数需要在watch和computed时会传进来
    //还需要处理在watch，computed中添加到依赖项
    const { computed, watch, callback } = options;
    this.computed = computed || false;
    this.watch = watch || false;
    this.getter = getter;
    this.callback = callback;

    this.vm = vm;
    //
    this.proxy = {
      value: "",
      dirty: false,
    };
    //TODO,computed
    if (watch) {
      this.handleWatch();
    } else {
      this.handleGet();
    }
  }
  update(oldValue: any) {
    if (this.computed) {
      // 更新计算属性(不涉及渲染)
      this.dep!.notify();
    } else if (this.watch) {
      if (oldValue !== this.proxy.value) {
        this.callback && this.callback(this.proxy.value, oldValue);
      }
    } else {
      // 更新data, 触发依赖其的属性更新
      this.handleGet();
    }
  }
  handleGet() {
    //目前只有计算属性才会调用 handleGet 方法
    pushTarget(this);
    //TODO,需要从computed缓存中取值进行比较

    popTarget(); // 取出依赖
    return "";
  }
  handleWatch() {
    pushTarget(this); //记录当前监听对象，并设置dep.target上下文
    if (this.getter) {
      this.proxy.value = this.getter();
    }
    popTarget(); // 取出上面放入 Dep.target 的上下文
  }
}
