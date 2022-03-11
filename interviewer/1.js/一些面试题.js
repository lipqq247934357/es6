/**
 * 1.如何实现
 *      let p = new Person(); //  p :{id:1}
 *      let p2 = new Person(); //  p :{id:2}
 *      let p3 = new Person(); //  p :{id:3}
 *
 * 还有两种解法：
 *      1.使用原型链
 *      2.使用给对象增加属性 这种方式显然更加的简单，使用闭包的原理
 */

let Person = (function () {
    let id = 0;
    return function () {
        id++;
        return { id }
    }
})();

let p = new Person(); //  p :{id:1}
let p2 = new Person(); //  p :{id:2}
console.log(p.id);
console.log(p2.id);


/**
 * 有n个promise任务的数组，同时只能并行执行两个，如何实现
 * 
 */


/**
 * 
 * @param {*} timer 时间间隔
 * @returns 返回一个promise函数
 */
const promiseFunc = (timer) => {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                console.log('timer', timer);
            }, timer)
        })
    }
}

const taskArr = [promiseFunc(500), promiseFunc(1400), promiseFunc(800), promiseFunc(1200), promiseFunc(1500), promiseFunc(1800)]; // Promise数组

/**
 * 
 * @param {*} taskNum 任务总数
 * @param {*} queueNum 并发任务数
 * @returns 
 */

const taskPool = (taskNum, queueNum) => {
    let executeNum = 0; // 已经执行的任务数量
    // 返回一个总的promise，表示整个任务的状态
    return new Promise((resolve, reject) => {
        // 先并行执行2个
        for (let i = 0; i < queueNum; i++) {
            generateFunc(executeNum++);
        }
        // 这个函数执行每个promise,当进入then表示上一个已经执行完，给executeNum++,然后执行下一个；
        // 保证了任务在上一个执行完之后立即执行下一个，同时两个任务是并发的
        async function generateFunc(params) {
            return await taskArr[params]().then(() => {
                if (executeNum < taskNum) {
                    generateFunc(executeNum++);
                }
                if (executeNum === taskNum) { // 全部执行完，resolve
                    resolve();
                }
            }).catch(err => { // 有任何一个报错，reject，整个任务失败
                console.log('err', err);
                reject(err);
            });
        }
    })
}

// 
taskPool(taskArr.length, 2);
