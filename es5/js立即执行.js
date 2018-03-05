// 任何的运算符都可以将一个匿名函数的声明转化为一个匿名的类型为函数类型的变量，后面加上括号，就可以执行
var a = (function () {
    return 1
})();
console.log(a);

var a = 1 + function () {
    return 1
}();
console.log(a);

var a = (function(){return 3}());
console.log(a);