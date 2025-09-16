// ES6 对象基础操作

// 1. 对象字面量增强
const name = '张三';
const age = 25;
const city = '北京';

// 属性简写
const person = {
    name,        // 等同于 name: name
    age,         // 等同于 age: age
    city,        // 等同于 city: city
    sayHello() { // 方法简写，等同于 sayHello: function() {}
        console.log(`你好，我是${this.name}`);
    }
};

console.log(person);
person.sayHello();

// 2. 计算属性名
const propName = 'dynamicProperty';
const obj = {
    [propName]: '动态属性值',
    [`method_${Date.now()}`]() {
        return '动态方法';
    }
};

console.log(obj.dynamicProperty);
console.log(obj[`method_${Date.now()}`]);

// 3. Object.assign() - 对象合并
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2, c: 3 }

// 4. 对象解构
const { name: personName, age: personAge, ...rest } = person;
console.log(personName, personAge, rest);

// 5. 对象展开运算符
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, ...obj1 };
console.log(obj2); // { z: 3, x: 1, y: 2 }

// 6. Object.is() - 严格相等比较
console.log(Object.is(NaN, NaN));     // true
console.log(Object.is(+0, -0));       // false
console.log(Object.is(5, 5));         // true 