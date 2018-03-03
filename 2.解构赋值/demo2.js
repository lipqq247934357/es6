//指定默认值
let [a, b = 2] = [1];
console.log(`a:${a}b:${b}`);

//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
let [c, d = 2] = [1, null];
console.log(`c:${c}d:${d}`);

let {e, f = 200} = {e: 1};
console.log(`e:${e}f:${f}`);
