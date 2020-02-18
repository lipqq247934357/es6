// Number.isInteger(24.0) 也会被判断为int，
// js存储数字的精度限制，如果位数很长，则会判断错误
// 比如Number.isInteger(2.000000000000001)会被判断为整数
// 同时字符串在这里也会被判断为非int类型
console.log(Number.isInteger(22));
console.log(Number.isInteger(22.0));
console.log(Number.isInteger(22.00000000000000003));
console.log(Number.isInteger('22'));

console.log(Math.trunc(22.3));


console.log((Math.pow(2, 53)+'').length);

console.log(Math.pow(2, 10));