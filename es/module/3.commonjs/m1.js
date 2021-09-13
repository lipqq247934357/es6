// main.js
// 要运行当前代码需要把package.json中的 "type": "module", 删掉
var mod = require('./m3.js');
var mod = require('./m3.js');
console.log('=========commonjs模块是单例的============');
console.log('mod === mod', mod === mod);
console.log('=====================');
console.log(mod.counter);  // 3
console.log(mod.obj);
console.log('=========通过引用类型动态获取变量============');
mod.incCounter();
mod.logCounter();
console.log(mod.obj);
console.log('=====================');
console.log('==========基本类型的值不变===========');
console.log(mod.counter); // 3
console.log('=====================');
