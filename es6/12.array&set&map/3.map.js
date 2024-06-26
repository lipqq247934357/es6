// map 键值对的数据结构， 健可以是任意数据类型
// set get has delete clear
// 1.创建 map
const m1 = new Map([[1,2]]);
console.log(m1);
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
console.log(m.get(o));
console.log(m.get(1));
// 2.操作
m.set('lipeng', 'lipeng');
console.log(m.get('lipeng'));
// 3.转换
console.log(Array.from(m));
console.log();
// 4.delete has，clear
console.log(m.has(o));
m.delete('lipeng');
m.clear();
console.log(m);
// 5.遍历
let m2 = new Map();
m2.set("name", 'lipeng');
m2.set("age", '23');
console.log('-------keys---------')
console.log([...m2.keys()]);
console.log('-------values---------')
console.log([...m2.values()]);
console.log('-------entries---------')
console.log([...m2.entries()]);
console.log(m2);