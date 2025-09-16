// ES6 对象遍历和操作

const user = {
    id: 1,
    name: '李四',
    email: 'lisi@example.com',
    age: 30,
    city: '上海',
    hobbies: ['读书', '游泳', '编程']
};

// 1. Object.keys() - 获取对象的所有键
const keys = Object.keys(user);
console.log('对象的所有键:', keys);

// 2. Object.values() - 获取对象的所有值
const values = Object.values(user);
console.log('对象的所有值:', values);

// 3. Object.entries() - 获取对象的键值对数组
const entries = Object.entries(user);
console.log('对象的键值对:', entries);

// 4. 使用 for...of 遍历 entries
console.log('遍历键值对:');
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// 5. 使用 for...in 遍历对象属性
console.log('使用 for...in 遍历:');
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
    }
}

// 6. Object.fromEntries() - 将键值对数组转换为对象
const entriesArray = [
    ['a', 1],
    ['b', 2],
    ['c', 3]
];
const newObj = Object.fromEntries(entriesArray);
console.log('从数组创建的对象:', newObj);

// 7. 对象属性描述符
const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log('name属性的描述符:', descriptor);

// 8. 定义新属性
Object.defineProperty(user, 'salary', {
    value: 8000,
    writable: false,      // 不可写
    enumerable: true,     // 可枚举
    configurable: false   // 不可配置
});

console.log('添加不可写属性后:', user);
user.salary = 10000; // 这行不会生效
console.log('尝试修改后:', user.salary);

// 9. 冻结对象
const frozenUser = Object.freeze({
    name: '王五',
    age: 28
});

console.log('冻结前:', frozenUser);
// frozenUser.age = 30; // 这行会报错
console.log('冻结后:', frozenUser); 