/**
 * Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。
 * 除此之外，它还有两个特性，使它可以作为异步编程的完整解决方案：函数体内外的数据交换和错误处理机制。
 */
// Generator函数数据交还
function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
console.log(g.next());
console.log(g.next(4));

// Generator函数错误处理机制
function* gen2(x) {
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e);
    }
    return y;
}

var g2 = gen2(1);
g2.next();
g2.throw('出错了');