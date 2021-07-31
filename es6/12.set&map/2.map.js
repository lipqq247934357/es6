// map 键值对的数据结构， 健可以是任意数据类型
// 1.创建 map
const m1 = new Map([[1,2]]);
console.log(m1);
const m = new Map();
const o = {p: 'Hello World'};
m.set(o, 'content')
console.log(m.get(o));
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
// 5.
let m = new Map();
m.set("name", 'lipeng');
m.set("age", '23');
console.log([...m.keys()]);
console.log([...m.values()]);
console.log([...m.entries()]);
console.log(m);