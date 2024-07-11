let obj = { name: "11" };
// delete obj.name;
Reflect.deleteProperty(obj, 'name');
console.log(obj);

// 老写法
console.log('assign' in Object); // true
// 新写法
console.log(Reflect.has(Object, 'assign')); // true