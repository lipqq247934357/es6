/**
 * 地址： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
 */

let re = /ab+c/;
// 1.test
console.log(re.test('abc'));
console.log(re.test('acb'));
// 2.exec
const regex1 = /foo/g;
const str1 = 'table football, foosball';
let array1;

if ((array1 = regex1.exec(str1)) !== null) {
    console.log('array1', array1);
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
    // expected output: "Found foo. Next starts at 9."
    // expected output: "Found foo. Next starts at 19."
}