/**
 * 如何实现
 *      let p = new Person(); //  p :{id:1}
 *      let p2 = new Person(); //  p :{id:2}
 *
 * 还有两种解法：
 *      1.使用原型链
 *      2.使用给对象增加属性
 */

let Person = (function () {
    let id = 0;
    return function () {
        id++;
        return {id: id}
    }
})();

let p = new Person(); //  p :{id:1}
let p2 = new Person(); //  p :{id:2}
console.log(p.id);
console.log(p2.id);
