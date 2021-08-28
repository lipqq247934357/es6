# 1.new

## new 的主要功能
    1.创建一个对象
    2.将这个新对象的__proto__指向构造函数的prototype
    3.将构造函数的作用域指向这个对象，执行构造函数
    4.如果函数返回值是对象，返回函数返回值，否则返回创建的对象

```js
const funcNew = (func, ...args) => {
    let obj = {};
    obj.__proto__ = func.prototype;
    const result = func.apply(obj, args);
    return result instanceof Object ? result : obj;
}
```

# 2.立即执行表达式

    1.任何的运算符都可以将一个匿名函数的声明转化为一个匿名的类型为函数类型的变量，后面加上括号，就可以执行
```js
    var a = (function () {
        return 1
    })();
    console.log(a);

    var a = 1 + function () {
        return 1
    }();
    console.log(a);

    var a = (function () {
        return 3
    }());
    console.log(a);
```