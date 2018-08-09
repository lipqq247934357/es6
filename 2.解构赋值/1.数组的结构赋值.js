/**
 * 解构赋值：按照一定模式从数组和对象中提取值，然后对变量进行赋值，这被称之为解构。
 * 右边的数据必须具备Iterator接口，如果不具备或者是undefind,null,NaN,Number,Boolean会报错,String不会报错
 * */

let [a, b, c] = [1, 2, 3];
console.log(a);

var d;
var e;
var f;
[d, e, f] = [1, 2, 3];
console.log(`d:${d},e:${e},f:${f}`);
[d, e, f] = [1, , 2];
console.log(`d:${d},e:${e},f:${f}`);

let obj = {};
[obj.a, obj.b, obj.c] = [1, 2, 3];
console.log(obj);

let [x] = 'a';
console.log(x);


/**
 * 解构赋值可以指定默认值
 *      如果一个数组成员严格等于（===）undefined，那么会给这个变量设置默认值
 * */

if (true) {
    let [a, b, c = 3] = [1, 2];
    console.log(c);
    [a, b, c = 3] = [1, 2, null];
    console.log(c);
}
