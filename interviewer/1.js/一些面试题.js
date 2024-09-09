/**
 * 1.如何实现
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
        return { id }
    }
})();

let p = new Person(); //  p :{id:1}
let p2 = new Person(); //  p :{id:2}
console.log(p.id);
console.log(p2.id);


// promise链式调用版本
const repeat1 = (fn, times, delay) => {
  return async (...args) => {
    let p = Promise.resolve();
    for (let i = 0; i < times; i++) {
      p = p.then(() => {
        fn(...args)
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      })
    }
  }
}

// async await版本
const repeat = (fn, times, delay) => {
  return async (...args) => {
    let p = Promise.resolve();
    for (let i = 0; i < times; i++) {
      p = p.then(() => {
        fn(...args)
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, delay)
        })
      })
    }
  }
}

// // 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒
