/***
 * 对象的解构赋值
 *      数组的元素是按照次序排列的，变量的取值是由它的位置决定的，而对象是没有次序的，变量必须与属性同名才能取值
 *      对象的解构赋值的内部机制是先找到同名属性，然后再赋值给对应的变量，被赋值的是后者，不是前者
 * */
var {name, age} = {name: 'lipeng', age: 23};
console.log(`name:${name},age:${age}`);
var {name, age} = {name: 'lipengGG', age: 26};
console.log(`name:${name},age:${age}`);
var {name:nm, age} = {name: 'lipengGG', age: 26};
console.log(`name:${nm},age:${age}`);
