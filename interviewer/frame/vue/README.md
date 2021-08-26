## 1.如何检测数组的变化

    数组没有使用Obeject.definePrototype
    1.修改数组的原型链，在数据变更的时候调用原型链上的更新方法，同时通知视图更新
    	修改array实例的__proto__。__proto__指向的这个对象通过Object.create(Array.prototype)创建，然后通过Object.definePrototype修改这个对象的几个要被修改的方法，同时在执行完重新刷新页面。
    2.数组里的每一项进行观测，如果是对象，数据变化的话也会引起数据更新
