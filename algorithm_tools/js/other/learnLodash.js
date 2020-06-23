let _ = require('lodash');

/**
 *
 * Array
 *
 */

/**
 * chunk
 *  将数组按照第二个变量b，分成每个长度为b的数组
 *
 *  console.log(_.chunk([1, 2, 3, 4], 2));
 *
 */


/**
 *
 * concat
 *  将多个数组，或者其他类型数据组合起来放入数组中
 *
 *  var array = [1];
 *  var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 *
 */

/**
 *
 * difference
 *  将第一个数组在第二个数组中没有的作为一个新数组返回
 *
 * console.log(_.difference([1,2,3,4],[1,2,3]))
 *
 */


/**
 *
 *
 *
 drop
    将数组前面几个元素删除，取决于第二个参数，默认是1

 console.log(_.drop([1, 2, 3]));
 // => [2, 3]

 console.log(_.drop([1, 2, 3], 2));
 // => [3]

 console.log(_.drop([1, 2, 3], 5));
 // => []

 console.log(_.drop([1, 2, 3], 0));
 // => [1, 2, 3]
 *
 */


let a = [1,2,3,4,5];
let b = a.concat();
let c = b.splice(0,1);

console.log(c);
console.log(b);
let d = b.concat(c);
console.log(d);

console.log(a);

