// 对象的遍历
console.log('-----object-----');
let obj = {
    name: 'lipeng',
    age: 23
};
console.log(Object.keys(obj).forEach(item => {
    console.log(obj[item]);
}));
for(let item in obj) {
    console.log(obj[item]);
}
console.log('----arr------');
// 数组的遍历
let arr = [1, 3, 4];
for (let item of arr) {
    console.log(item);
}
arr.forEach(item => {
    console.log(item);
});
console.log('----set------');
let temp2 = new Set();
temp2.add(1).add(2).add(4).add(3);
console.log(temp2.keys());
console.log(temp2.values());
console.log(temp2.entries());
console.log('----map------');
let m = new Map();
m.set("name", 'lipeng');
m.set("age", '23');
console.log([...m.keys()]);
console.log([...m.values()]);
console.log([...m.entries()]);
console.log(m);
