
/**
 * 
 * 1. observe(data, true)
 * 2. 实例化new Observe()
 *       this.dep = new Dep()
 *       this.walk(value)
 * 3. defineReactive
 *    new Dep()
 */

/**
 * 一个数组容器，存放用到的watcher
 */
class Dep {
    static target;
    subs;

    constructor() {
        this.subs = []
    }

    addSub() {
        this.subs.push(sub)
    }

    removeSub() {
        remove(this.subs, sub)
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    notify() {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

/**
 * 
 * Watcher：一个对象，它封装了生成vnode，更新dom的逻辑
 * 
 */

 updateComponent = () => {
    vm._update(vm._render(), hydrating)
  }
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)