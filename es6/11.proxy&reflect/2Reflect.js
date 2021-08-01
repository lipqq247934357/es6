let obj = {name: "11"};
// delete obj.name;
Reflect.deleteProperty(obj, 'name');
console.log(obj);