/**
 * * TDOO: 待确认
 * 1.es6的继承和es5是有区别的：
 * 
 * 	继承的实现原理是让子构造函数的原型等于父构造函数的实例，
 *  这样的话子实例可以访问父实例，进而访问父实例的原型
 * 
 *  es6的继承是先创建父类的实例，然后修改那个实例作为子类的实例
 *  1.关键逻辑
 *        在子类的构造函数中生成父类的实例，然后修改这个实例
 *      1.Parent.call(this) // this是Child
 *        子类的原型的实例指向 父类的原型
 *  2.Child.prototype.__proto__ = Parent.prototype; 
 * 
 */


var inherit = (function (c, p) {
    var F = function () {
    };
    return function (c, p) {
        F.prototype = p.prototype;
        c.prototype = new F();
        c.prototype.constructor = c;
    }
})();


