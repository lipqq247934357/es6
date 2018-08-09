/**
 * 解构赋值的规则是如果右边的值不是数组或者对象，就先转化为对象
 *      布尔，数值，字符串转换为对应的包装类
 *      null,undefined无法转化为对象所以会报错
 */

const [a, b, c, d, e] = 'abcde';
console.log(`a:${a}b:${b}c:${c}d:${d}e:${e}`);

