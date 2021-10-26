/**
 * 正则表达式可视化工具:
 *  https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24
 * 
 */

// exec,test

const re = /aa/;
console.log("re.exec('aa,cc,dd')", '\n', re.exec('aa,cc,dd'));
console.log("re.test('aa,cc,dd')", '\n', re.test('aa,cc,dd'));

// match

const regex = /aa/;
console.log("'aa'.match(regex)", '\n', 'aa'.match(regex));

// matchAll
const regex2 = /aa/g;
console.log("'aa_aa_cc_aa'.matchAll(regex)", '\n', Array.from('aa_aa_cc_aa'.matchAll(regex2)));

// search
const regex3 = /\d/g;
console.log("'11_22_aa_dd'.search(regex3)", '\n', '11_22_aa_dd'.search(regex3));

// replace
console.log("'11_22_aa_dd'.reaplace(regex3)", '\n', '11_22_aa_dd'.replace(regex3, '$'));

// split
const regex4 = /22/;
console.log("'11_22_aa_dd'.split(regex3)", '\n', '11_22_aa_dd'.split(regex4));

