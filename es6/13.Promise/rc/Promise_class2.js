// http://www.javascriptpeixun.cn/course/2216/task/153618/show#   35min左右
/**
 * 这是完整实现
 * 
 * Promise.then.then获取上一个then的返回值作为新的promise
 * a.then((value) => {
 *      return new Promise((resolve, reject) => {
 *        setTimeout(() => resolve(200), 1400, 'xxxx');
 *      });
 * }).then(value => {
 *     console.log(value);
 * });
 * 
 * .then.then 说明在.then之后需要返回一个promise
 * 返回的promise的参数是上个promise执行之后的结果x
 * 如果x是基本值的话，使用新的promise.resolve(x)，执行下一个then方法
 * 如果x是promise的话，then.call(x)，然后对结果再次执行resolvePromise
 * 因为有可能promise返回的又是个promise
 */

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) { //循环引用,不能自己等待自己完成
        return reject('TypeError');
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'funcion')) {
        try { // 兼容取then的时候报错
            let then = x.then;
            if(typeof then === 'function') {
                then.call(x,y => {
                    resolvePromise(promise2,y,resolve,reject); // 如果promise返回值仍然是promise
                },err => {
                    reject(err);
                });
            }
        } catch (e) {
            reject(e);
        }
    } else { // 普通值
        resolve(x);
    }
}

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
    then(onFufilled, onRejected) {
        let promise2;
        if (this.status === 'resolved') {
            promise2 = new Promise((resolve, reject) => {
                let x = onFufilled(this.value);
                // 解析x和promise2的关系
                resolvePromise(promise2, x, resolve, reject);
            });
        }
        if (this.status === 'rejected') {
            promise2 = new Promise((resolve, reject) => {
                let x = onRejected(this.reson);
                resolvePromise(promise2, x, resolve, reject);
            });
        }

        // 存放成功和失败的回调
        if (this.status === 'pending') {
            promise2 = new Promise((resolve, reject) => {
                this.onResolvedCallBacks.push(() => {
                    let x = onFufilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                });
                this.onRejectedCallBacks.push(() => {
                    let x = onRejected(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                });
            });
        }
        return promise2; // 调用then后返回新的promise
    }
}

module.exports = Promise
