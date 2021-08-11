// main.js
// 要运行当前代码需要把package.json中的 "type": "module", 删掉
var mod = require('./m3.js');
console.log(mod.counter);  // 3
console.log(mod.obj);
mod.incCounter();
mod.logCounter();
console.log(mod.counter); // 3
console.log(mod.obj);
