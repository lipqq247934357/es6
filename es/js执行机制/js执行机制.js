// 浏览器执行的基本原理
// 参考链接：https://juejin.im/post/59e85eebf265da430d571f89

// 1.javascript是单线程的


console.log('1');

setTimeout(function () {
    console.log('2');
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
});

new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
});

Promise.resolve().then(function (resolve, reject) {
    console.log(16);
});

// 1,5,6,7,2,3,4

/**
 *  参考文档：https://www.zhihu.com/question/23028843
 * 总结：上个参考文档给出的信息主要是：
 *        macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
 *        micro-task(微任务)：Promise，process.nextTick，setImmediate
 *        主要流程：主线程执行宏任务，然后执行微任务，渲染页面，然后执行宏任务，然后执行微任务
 *        微任务的执行逻辑是：首先是在EvenetTable注册函数，然后等异步执行完成，将回调函数放入Event Queue中等待执行
 *        其中process.nextTick，setImmediate是node的范畴
 *        process.nextTick是将任务放到微任务头部，setImmediate是将微任务放到尾部，所以优先级process.nextTick比较高。(代码见demo2)
 * */


// 第二套文档：https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/ 似乎这一套更详细


/**
 * node 版本
 // 参考链接：https://juejin.im/post/59e85eebf265da430d571f89

 // 1.javascript是单线程的


 console.log('1');

 setTimeout(function () {
    console.log('2');
    // process.nextTick(function () {
    //     console.log('3');
    // })
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5')
    })
});
 // process.nextTick(function () {
//     console.log('6');
// })

 Promise.resolve().then(function(resolve,reject) {
    console.log(16);
});

 new Promise(function (resolve) {
    console.log('7');
    resolve();
}).then(function () {
    console.log('8')
});

 setTimeout(function () {
    console.log('9');
    // process.nextTick(function () {
    //     console.log('10');
    // })
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    })
});


 // 1,7,6,8,2,4,9,11,3,10,5,12, node
 // 1,7,6,8,2,4,3,5,9,11,10,12 浏览器(别人不知道咋瞎搞的)
 // 1,7,8,2,4,5,9,11,12 浏览器
 */

