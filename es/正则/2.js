/**
 * 地址： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
 */

let re = /ab+c/;
// 1.test
console.log(re.test('abc'));
console.log(re.test('acb'));
// 2.exec
console.log(re.exec('abc对方水电费'));