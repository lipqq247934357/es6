/**
 * js 存在变量提升
 *  在作用域内变量会被在作用域开始的时候执行声明语句  比如：var a；
 *  在作用域内函数声明也会被提前执行生命语句  比如: function f(){ console.log(111); }
 */
console.log(a);
var a = 20;
f();

function f() {
    console.log(111);
}