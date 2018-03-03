//为什么会出现块级作用域？ 下面代码导致全局作用域的变量被函数作用域的代码污染了，
// 同时某些不需要全局的变量被迫成了全局变量，不如循环的时候的下标
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined
console.log(tmp);