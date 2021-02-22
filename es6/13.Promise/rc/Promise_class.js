// http://www.javascriptpeixun.cn/course/2216/task/153618/show#   35min左右
/**
 * 这是最基本的实现
 * 
 * 参考使用写源码：
 * let a = new Promise((resolve, reject) => {
 *     setTimeout(() => resolve(2), 1400, 'done');
 * });
 * 
 * 1.首先执行new操作 所以Promise是一个class,或者是函数
 * 
 * 2.传入一个函数，这个函数会马上执行，所以在构造函数内部执行这个函数
 *  2.1因为这个函数内部使用了resolve,reject，这两个函数作为Promise的内置函数使用
 *  2.2执行resolve的时候，更新为resolve状态，执行回调
 *  2.3执行reject的时候，更新为reject状态，执行回调
 * 
 * 3.还有表示状态的status,还有then函数需要的参数，也需要存起来
 * 
 * 4.因为then是同步代码，在状态为pending的时候将回调缓存到数组里面
 * 
 * 5.在状态发生变更的时候，修改状态，然后执行缓存的回调函数
 * 
 */
class Promise {

    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        // 存放成功的回调
        this.onResolvedCallBacks = [];
        // 存放失败的回调
        this.onRejectedCallBacks = [];
        const resolve = value => {
            if (this.status === 'pending') {
                this.status = 'resolved';
                this.value = value;
                this.onResolvedCallBacks.forEach(fn => fn());
            }
        }

        const reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallBacks.forEach(fn => fn());
            }
        }

        // 执行出错执行reject
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    // then
    then(onFufilled,onRejected) {
        if (this.status === 'resolved') {
            onFufilled(this.value);
        }
        if (this.status === 'rejected') {
            onRejected(this.reson);
        }

        // 存放成功和失败的回调
        if(this.status === 'pending') {
            this.onResolvedCallBacks.push(() => {
                onFufilled(this.value);
            });
            this.onRejectedCallBacks.push(() => {
                onRejected(this.value);
            });
        }
    }
}

module.exports = Promise
