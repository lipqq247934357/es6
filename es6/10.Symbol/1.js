let s = Symbol('1111');
console.log(s);
// "symbol"

// Symobl 可以被显式转化为string和number

console.log(s.description);

// Symbol 值作为对象属性名时，不能用点运算符。