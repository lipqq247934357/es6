/**
 * 如何实现
 *      let p = new Person(); //  p :{id:1}
 *      let p2 = new Person(); //  p :{id:2}
 *      let p3 = new Person(); //  p :{id:3}
 *
 * 还有两种解法：
 *      1.使用原型链
 *      2.使用给对象增加属性 这种方式显然更加的简单，使用闭包的原理
 */

let Person = (function () {
    let id = 0;
    return function () {
        id++;
        return {id}
    }
})();

let p = new Person(); //  p :{id:1}
let p2 = new Person(); //  p :{id:2}
console.log(p.id);
console.log(p2.id);
