/**
 * 
 * es6的继承和es5的继承在底层原理上是相似的；都是使用原型链
 * 
 * 但是有些区别：
 * 
 * 底层逻辑比较
尽管 ES6 的类继承语法更加简洁，其底层逻辑仍然与 ES5 的实现方式相似，都是基于原型链的。这一点在 JavaScript 引擎的实现中得到了体现。

ES5 底层逻辑
构造函数调用：通过 Function.call 来调用父类的构造函数。
原型链设置：通过 Object.create 来设置子类的原型链，使子类实例能够访问父类的原型方法。
ES6 底层逻辑
构造函数调用：使用 super 关键字来调用父类的构造函数，这是 ES6 语法的一部分。
原型链设置：由 JavaScript 引擎自动处理，ES6 类的 extends 关键字简化了原型链的设置。
主要区别
语法简洁：ES6 的类继承语法更加简洁和直观，使得类定义和继承更加容易理解和维护。
super 关键字：在 ES6 中，子类的构造函数必须调用 super，否则会抛出错误。super 用于调用父类的构造函数和方法。
原型链自动处理：在 ES6 中，使用 extends 关键字，JavaScript 引擎会自动处理原型链的设置，而在 ES5 中需要手动处理。
静态方法和属性：ES6 类可以定义静态方法和属性，这是 ES5 构造函数不具备的功能。
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


