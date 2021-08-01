/**
 * 
 * Array:for…in 遍历元素的下标
 * for…of 遍历元素的值
 * 
 */
console.log('for...in');
let arr = ['d', 's', 'r', 'c'];
for (const key in arr) {
    if (arr.hasOwnProperty(key)) {
        console.log(key);
    }
}
console.log('for...of');
for (const iterator of arr) {
    console.log(iterator);
}