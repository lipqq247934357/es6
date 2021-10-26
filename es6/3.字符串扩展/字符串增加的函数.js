/**
 * for of遍历字符串
 */
for (let item of 'abc') {
    console.log(item);
}
/**
 * 第几个字符
 * @type {string}
 */
let slogan = 'hello lipeng';
console.log(slogan.charAt(4));

/**
 * includes，startsWith,endsWith
 */

console.log(slogan.includes('lipeng'));
console.log(slogan.startsWith('lipeng'));
console.log(slogan.endsWith('peng'));
console.log('xd'.repeat(5));

/**
 * 
 * padStart, padEnd
 * 可以格式化时间，添加前面的0
 * 
 */
console.log('10'.padStart(2, '0'));
console.log('6'.padStart(2, '0'));
console.log('0'.padEnd(4, '.00'));

/**
 * 
 * trimStart, trimEnd
 * 
 */

const a = ' sdf ';

 console.log(`----${a.trim()}---`);
 console.log(`----${a.trimStart()}----`);
 console.log(`----${a.trimEnd()}---`);


/**
 * 
 * replaceAll es2021的内容，在node可能不支持
 * 
 */

// console.log('111_222'.replaceAll('1', '3'));