// main.js
// 要运行当前代码需要把package.json中的 "type": "module", 删掉
const mod1 = require('./m3.js');
const mod2 = require('./m3.js');
console.log('=========commonjs模块是单例的============');
console.log('mod1 === mod2', mod1 === mod2);
console.log('=====================');
console.log(mod1.counter);  // 3
console.log(mod1.obj);
console.log('=========通过引用类型动态获取变量============');
mod1.incCounter();
mod1.logCounter();
console.log(mod1.obj);
console.log('=====================');
console.log('==========基本类型的值不变===========');
console.log(mod1.counter); // 3
console.log('=====================');
console.log('==========是单例对象===========');
console.log(mod2.counter); // 3
console.log(mod2.obj); // 3
console.log('=====================');

