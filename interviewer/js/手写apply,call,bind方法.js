/**
 *
 * 思路：
 *  this代表函数
 *  参数中第一个是被执行的对象
 *  剩下的参数是函数的参数
 *  拼接成新的函数就ok了
 *
 * @param context
 * @returns {*}
 */

Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
};

/**
 *
 * 思路：
 *  和call的区别就是第二个参数是数组
 *
 * @param context
 * @returns {*}
 */
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    // 处理参数和 call 有区别
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

/**
 *
 * 思路：
 *  返回一个函数，这个函数内部是原来对象.call（函数参数）
 *  如果有预先设置的参数，将原先的参数和新的参数拼接传入
 *
 *
 * @param context
 * @returns {F}
 */
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}