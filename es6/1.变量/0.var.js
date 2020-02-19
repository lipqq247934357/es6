/**
 * var的问题
 *    1.变量可以先使用后声明，虽然值是undefined
 *    2.没有块级作用域，变量的作用域会提升
 *
 * 变量提升的本质
 *    就是函数声明语句会被提取到作用域的顶部，赋值语句的声明也会被提取到作用域的顶部
 *    同时函数提升优先于变量提升,会覆盖变量声明
 */
console.log(a);
var a = 100;

{
    var b = 20;
}
console.log(b);


console.log(c);


var c = 100;
console.log(c);

function c() {
    alert(1)
}

var c = 200;

