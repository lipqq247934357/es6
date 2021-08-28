/**
 * 思路：
 *  1.让一个空函数作为构造函数
 *  2.让这个空函数的prototype指向父类的prototype（相当于一个函数体为空的父函数）
 *  3.让子类的prototype指向新的父函数的实例
 *  4.让子类的原型的构造函数指向自身
 */

var inherit = (function (c, p) {
    var F = function () {
    };
    return function (c, p) {
        F.prototype = p.prototype;
        c.prototype = new F();
        // c.uber = p.prototype;
        console.log(c.prototype.constructor);
        c.prototype.constructor = c;
        console.log(c.prototype.constructor);
    }
})();

function fu() {
}

fu.prototype.age = 100;

function zi() {
}

inherit(zi, fu);
console.log(new zi().age);
