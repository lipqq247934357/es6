// Promise.resolve

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))


const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))
