// 构造函数如果返回基本数据类型，则返回值无意义
function Test1(name) {
    this.name = name
    return 1
}
const t1 = new Test1('yck')
console.log('t1.name:' + t1.name) // 'yck'
// 构造函数如果返回值为对象，那么这个返回值会被正常使用
function Test2(name) {
    this.name = name
    console.log(this) // Test { name: 'yck' }
    return { age: 26 }
}
const t2 = new Test2('yck')
console.log(t2) // { age: 26 }
console.log(t2.name) // 'undefined'
// 实现new 运算符
/**
 * 	1.创建一个对象
 *  2.将这个新对象的__proto__指向构造函数的prototype
 * 	3.将构造函数的作用域指向这个对象，执行构造函数
 *  4.如果结果返回值不是对象，返回初始创建的对象
 */ 

 /**
 * @param {*} func 
 * @param  {...any} args 
 * @returns 
 */
const newOperate = (func, ...args) => {
    let obj = {};
    obj.__proto__ = func.prototype;
    const result = func.apply(obj, args);
    return result instanceof Object ? result : obj;
}

const Person = function () {
    this.name = 'aa';
}
Person.prototype.age = 28;
const p = newOperate(Person);
console.log(p.name);
console.log(p.age);



