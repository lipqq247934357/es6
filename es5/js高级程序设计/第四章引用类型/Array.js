let testType = 3;
// 基本用法
if (testType === 1) {
    (function () {
        let array = [1, 2, 3, 4];
// console.log(array.length);
// array.length = 3;
// console.log(array.length);
// array.length = 5;
// console.log(array.length);
// console.log(array instanceof Array);
// console.log(Array.isArray(array));
        console.log(array.toString());
        console.log(array.toLocaleString());
        console.log(array.valueOf());// 返回数组本身

    })();
}
// 队列，栈操作
if (testType === 2) {
    (function () {
        let array = [1, 2, 3, 4, 5, 6];
        //push 数组末尾添加项
        console.log(array.push(7));
        // pop 数组末尾删除项
        console.log(array.pop());
        // shift 数组开头删除项
        console.log(array.shift());
        ;
        // unshift 数组开头增加项
        console.log(array.unshift(2, 7, 8));
        ;
    })()
}
// 排序
if (testType === 3) {
    (function () {
        var array = [1, 2, 5, 10, 15];
        // 倒叙
        console.log(array.reverse());
        // 排序 每一项转换成字符串排序
        console.log(array.sort());
        //通过函数排序
        console.log(array.sort(function (val1, val2) {
            return val1 > val2;
        }));
    })()
}
// 操作方法
