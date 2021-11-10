// 只有状态全部变为fulfilled,p的状态才是fulfilled
// 如果有一个状态变为rejected,p的状态就是rejected，参数是第一个状态为rejected的参数



/**
 *
 * promise.all 如何让某个promise返回reject的情况下仍然可以正常返回呢？
 * 地址： https://juejin.cn/post/6844903959010738189
 * 可以对每个promise的结果都用then包装一下，这样即使reject仍然会返回正确的结果
 */

let p1 = function () {
    return new Promise((resolve, reject) => {
        reject(2)
    }).catch(error => error)

}

let p2 = function () {
    return new Promise((resolve, reject) => {
        resolve(1);
    })

}

Promise.all([p1(), p2()]).then((results) => {
    console.log(results);
}, (reason) => {
    console.log(reason);
});


// Promise.allSettled   es2020

// Promise.any es2021

