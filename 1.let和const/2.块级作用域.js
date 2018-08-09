/**
 * let 新增了一种声明变量的方式，同时所声明的变量拥有了块级作用域，拥有了块级作用域自然有他的好处
 *  1.内层变量可以覆盖外层变量
 *  2.可以防止一些局部使用的变量泄露成全局变量
 * */
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}

f(); // undefined
console.log(tmp);