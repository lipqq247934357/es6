// 1.最简单的函数柯里化
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3

// 2.扩展 根据函数的参数数量，等参数的数量足够了，执行函数
function curry(fn) {
    let _this = this;
    let len = fn.length;
    let cacheParams = [];
    let _curry = function (...params) {
        cacheParams.push(...params);
        if (cacheParams.length >= len) {
            console.log('this.name', this.name);
            return fn.apply(_this, cacheParams);
        } else {
            return _curry;
        }
    }
    return _curry;
}

function add(x, y) {
    return x + y
}
let curryingAdd2 = curry(add);

// console.log('curryingAdd2(1)(2)(6)', curryingAdd2(1)(2)(6));
let a = curryingAdd2(1);
let b = a.call({name: 'lipeng'}, 2);

// 3.经典面试题 参见算法模块
