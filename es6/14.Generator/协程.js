/**
 * 1.协程：意思是多个线程互相协作，完成异步任务。
 *      大致流程：
 *      1.协程A开始执行
 *      2.协程A执行一半，进入暂停，执行权转移到协程B
 *      3.协程B交还执行权
 *      4.协程A恢复执行
 * 2.协程的Generator函数实现
 *
 */

function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
console.log(g.next());
console.log(g.next());