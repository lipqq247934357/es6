// 
let myExports = {};
console.log(Object.prototype.toString.call(myExports));
Object.defineProperty(myExports, Symbol.toStringTag, { value: "Module" });
console.log(Object.prototype.toString.call(myExports)); //[object Module]