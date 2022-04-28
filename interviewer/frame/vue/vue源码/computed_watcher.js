// computed watcher 的 getter
function createComputedGetter (key) {
    return function computedGetter () {
      const watcher = this._computedWatchers && this._computedWatchers[key]
      if (watcher) {
        //   
        watcher.depend()
        // 
        return watcher.evaluate()
      }
    }
  }


  /**
   * 这是watcher的depend方法
  * Depend on this watcher. Only for computed property watchers.
  */
depend () {
    if (this.dep && Dep.target) {
    // 绑定渲染watcher
      this.dep.depend()
    }
  }

  /**
  * Evaluate and return the value of the watcher.
  * This only gets called for computed property watchers.
  */
evaluate () {
    if (this.dirty) {
        // 执行compute 收集 computed watcher
      this.value = this.get()
      this.dirty = false
    }
    return this.value
  }