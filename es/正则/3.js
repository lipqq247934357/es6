/**
 * 地址： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
 */

let re = /(abc)/g;
// 1.match
console.log('01234abc'.match(re));
// 2.matchAll
console.log(...'01234abc1234abcdef'.matchAll(re));
// 3.search
console.log('01234abc1234abcdef'.search(re));
// 4.replace
console.log('01234abc1234abcdef'.replace(re, '1212121'));
// 5.split 备注：可以将要分割的字符用括号括起来，返回的结果也包含分割的匹配内容
console.log('01234abc1234abcdef'.split(re));