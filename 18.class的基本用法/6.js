/**
 * es5的继承是：
 *  子构造函数的原型等于父类的实例
 *  所以可以直接让一个空函数的原型原型等于父类的原型，执行new 操作作为父类的实例，让字构造函数指向这个子实例
 */

var inherit = (function (c, p) {
    var F = function () {
    };
    return function (c, p) {
        F.prototype = p.prototype;
        c.prototype = new F();
        // c.uber = p.prototype;
        c.prototype.constructor = c;
    }
})();