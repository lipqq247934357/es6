// set 类似数组，但是成员的值是唯一的,没有重复的值
// 1.增加参数
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}
console.log(new Set([12,23]));
console.log(new Set('1234222224567'));
// has 运算符
console.log(s.has(2));
// 2.去除重复的数组和字符串
console.log([...new Set([1,2,3,4,5,2,3])]);
console.log([...new Set('1234564223459')].join(''));
// 3.参数是否相同重复使用类似'==='，区别是NaN和NaN是不相同的
let s2 = new Set();
s2.add(1).add('1').add(NaN).add(NaN).add({}).add({});
console.log(s2);
// 4.set其他操作
let temp = new Set();
temp.add(1).add(2).add(3);
console.log(temp, `size: ${temp.size}`);
console.log(temp.delete(1));
console.log(temp);
temp.clear();
console.log(temp);
// 5.遍历 遍历顺序和插入顺序一致
let temp2 = new Set();
temp2.add(1).add(2).add(4).add(3);
console.log(temp2.keys());
console.log(temp2.values());
console.log(temp2.entries());
