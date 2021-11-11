const co = require('co');
/**
 * 1.Generator函数是ES6提供的一种异步解决方案
 * 1.Generator函数有多种理解角度，
 *      从语法上：Generator函数是一个状态机，封装了多个内部状态，执行Generator函数会返回一个遍历器对象，可以依次遍历Generator
 *      函数内部的每一个状态。
 *      从形式上：Generator函数是一个普通函数，但有两个特征，
 *      一是function关键字和函数名之间有*号，
 *      二是函数内部使用yield关键字，定义不同的内部状态。
 *
 * Generator函数可以理解为多个函数组成的函数段，并且他们有相同的返回值
 * 
 */

function* helloWorldGenerator() {
    let a = yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    let b = yield ['world', a];
    return b;
}

// var hw = helloWorldGenerator();

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


co(helloWorldGenerator).then((value) => {
    console.log(value);
})