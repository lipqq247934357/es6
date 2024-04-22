
/**
 * 需求：
 *  有n个promise任务的数组，但是任务池容量有限，每次只能执行m个
 *  TODO: 并且每个任务增加重试机制，在任务失败之后放入队列末尾，再执行，可以重试x次
 *      1.思路：
 *          1.先执行任务池数量的任务
 *          2.在任务池某个任务执行完毕之后
 */

/**
 * 
 * @param {*} timer 时间间隔
 * @returns 返回一个promise函数
 */
const delay = (timer) => {
    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                console.log('timer', timer);
            }, timer)
        })
    }
}

const taskArr = [delay(500), delay(1400), delay(800), delay(1200), delay(1500), delay(1800)]; // Promise数组

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

taskPool(taskArr.length, 2);